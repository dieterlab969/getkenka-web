# 🐧 Local Development Setup — Ubuntu

**Project:** GetKenka | **Platform:** Ubuntu 24.04 LTS / 22.04 LTS (native, no Docker) | **Est. time: < 5 minutes**

---

## 1. System Prerequisites

Start with a clean package index and the essential build tools required to compile native Node.js addons.

```bash
# Refresh apt package lists
sudo apt update && sudo apt upgrade -y

# Install essential build tools and curl
sudo apt install -y build-essential curl git
```

> These packages (`gcc`, `make`, `g++`) are required by several Node.js native modules. Install them once and they apply globally.

---

## 2. Node.js v20 LTS & pnpm

### Option A — NodeSource Repository (Recommended for servers & CI)

NodeSource provides an official apt repository that stays up to date with LTS releases:

```bash
# Add the NodeSource v20 LTS repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js (includes npm)
sudo apt install -y nodejs

# Verify
node -v   # must show v20.x.x
npm -v
```

### Option B — nvm (Recommended for local dev with multiple projects)

```bash
# Install nvm
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Reload shell environment
source ~/.bashrc

# Install and use Node.js v20 LTS
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node -v   # must show v20.x.x
```

### Enable pnpm via Corepack

Corepack ships with Node.js v16+ and manages package manager versions without a separate global install:

```bash
# Enable corepack (ships built into Node.js)
sudo corepack enable

# Activate the latest stable pnpm
corepack prepare pnpm@latest --activate

# Verify
pnpm -v
```

> If `corepack` is not available (older npm), install pnpm directly: `npm install -g pnpm`

---

## 3. Native MySQL Setup

### Install MySQL Server

```bash
sudo apt install -y mysql-server

# Verify the installed version
mysql --version
```

### Manage the MySQL Service via systemctl

```bash
# Start MySQL
sudo systemctl start mysql

# Enable auto-start on boot
sudo systemctl enable mysql

# Check service status
sudo systemctl status mysql

# Restart / Stop
sudo systemctl restart mysql
sudo systemctl stop mysql
```

### Secure the Installation

Run the interactive security wizard to set a root password and harden the default configuration:

```bash
sudo mysql_secure_installation
```

**Recommended answers:**

| Prompt | Answer |
|---|---|
| Setup VALIDATE PASSWORD component? | `Y` (choose strength level 1 or 2) |
| New root password | Set a strong password |
| Remove anonymous users? | `Y` |
| Disallow root login remotely? | `Y` |
| Remove test database? | `Y` |
| Reload privilege tables now? | `Y` |

> **Ubuntu 22.04 / 24.04 Note:** MySQL on Ubuntu defaults to `auth_socket` authentication for the root user, meaning the root user authenticates via the OS socket rather than a password. See the [Troubleshooting](#troubleshooting-ubuntu-specific) section if `mysql_secure_installation` fails or password auth does not work as expected.

---

## 4. Database Initialization

### Log In and Create the Local Database

On a fresh Ubuntu MySQL install, connect using `sudo` (socket auth):

```bash
sudo mysql
```

Inside the MySQL shell:

```sql
-- Create the local development database
CREATE DATABASE getkenka_local CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create a dedicated app user (recommended over using root)
CREATE USER 'getkenka'@'localhost' IDENTIFIED BY 'YOUR_APP_PASSWORD';
GRANT ALL PRIVILEGES ON getkenka_local.* TO 'getkenka'@'localhost';
FLUSH PRIVILEGES;

-- Confirm the database exists
SHOW DATABASES;

-- Exit
EXIT;
```

> Replace `YOUR_APP_PASSWORD` with a strong password of your choice.

### Configure Your `.env.local` File

```bash
cp .env.example .env.local
```

Open `.env.local` and set the database variables:

```dotenv
# ── Database ───────────────────────────────────
DATABASE_TYPE=mysql
MYSQL_URL=mysql://getkenka:YOUR_APP_PASSWORD@localhost:3306/getkenka_local

# ── Application ────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

> If you prefer to use the root user directly (not recommended), see the [Troubleshooting](#troubleshooting-ubuntu-specific) section to switch root to password authentication first.

---

## 5. Project Setup

### Install Dependencies

```bash
pnpm install
```

### Push the Database Schema

Applies your ORM schema definitions to `getkenka_local`:

```bash
pnpm db:push
```

Expected output:

```
[✓] Changes applied to getkenka_local
```

### Start the Development Server

```bash
pnpm dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. The app should be running.

---

## 🩺 Troubleshooting (Ubuntu Specific)

### ❌ `Access denied for user 'root'@'localhost'` (Auth Socket Plugin)

Ubuntu's MySQL uses the `auth_socket` plugin for root by default — root authenticates via the OS user, not a password. This means connecting as `root` without `sudo` will fail.

**Fix A — Always connect via sudo (safest for local dev):**

```bash
sudo mysql -u root
```

**Fix B — Switch root to password authentication permanently:**

```bash
sudo mysql
```

Inside the shell:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_ROOT_PASSWORD';
FLUSH PRIVILEGES;
EXIT;
```

Now you can connect without `sudo`:

```bash
mysql -u root -p
```

Update `MYSQL_URL` in `.env.local` if you choose to use root:

```dotenv
MYSQL_URL=mysql://root:YOUR_ROOT_PASSWORD@localhost:3306/getkenka_local
```

---

### ❌ `mysql_secure_installation` Fails or Loops on Password Prompt

This happens because `auth_socket` is active and the wizard cannot set a password over a socket-authenticated session.

**Fix — switch root to password auth first, then re-run the wizard:**

```bash
sudo mysql -e "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'TEMP_PASSWORD'; FLUSH PRIVILEGES;"
sudo mysql_secure_installation
```

---

### ❌ `systemctl status mysql` Shows `Failed` or `Active: failed`

**Step 1 — Read the detailed error log:**

```bash
sudo journalctl -xeu mysql.service --no-pager | tail -40
```

**Step 2 — Check the MySQL error log directly:**

```bash
sudo tail -50 /var/log/mysql/error.log
```

**Common causes and fixes:**

| Cause | Fix |
|---|---|
| Data directory permissions wrong | `sudo chown -R mysql:mysql /var/lib/mysql` |
| Corrupted InnoDB log | Remove `/var/lib/mysql/ib_logfile*` then restart |
| Port 3306 already in use | See port conflict fix below |
| Disk full | Free space: `df -h` |

**Reinitialize data directory (last resort — wipes all local data):**

```bash
sudo systemctl stop mysql
sudo rm -rf /var/lib/mysql
sudo mysqld --initialize --user=mysql
sudo systemctl start mysql
```

> ⚠️ This destroys all local MySQL data. Only use this on a brand-new install.

---

### ❌ Port 3306 Already in Use

```bash
# Find the process using port 3306
sudo lsof -i :3306
# or
sudo ss -tlnp | grep 3306
```

**Kill the conflicting process:**

```bash
sudo kill -9 <PID>
sudo systemctl start mysql
```

**Or run MySQL on a different port** — edit the config:

```bash
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

Change or add:

```ini
[mysqld]
port = 3307
```

Restart and update `.env.local`:

```bash
sudo systemctl restart mysql
```

```dotenv
MYSQL_URL=mysql://getkenka:YOUR_APP_PASSWORD@localhost:3307/getkenka_local
```

---

### ❌ UFW Firewall Blocking MySQL (Remote Access Scenarios)

For purely local development, MySQL only listens on `127.0.0.1` by default and UFW is not a concern. If you're connecting from another machine on the network:

```bash
# Allow MySQL through UFW from a specific IP only
sudo ufw allow from 192.168.1.0/24 to any port 3306

# Check UFW status
sudo ufw status verbose
```

> For local-only development, **do not open port 3306 to the public internet**.

---

### ❌ `pnpm: command not found` After Corepack Setup

Corepack's shims may not be in your `PATH` yet.

```bash
# Check where corepack placed the shim
which pnpm

# If not found, add the global bin directory to PATH
echo 'export PATH="$HOME/.local/share/pnpm:$PATH"' >> ~/.bashrc
source ~/.bashrc

pnpm -v
```

---

### ❌ `node: command not found` After nvm Install

The nvm initializer may not have been added to your shell profile.

```bash
# Add manually to ~/.bashrc
cat >> ~/.bashrc << 'EOF'
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
EOF

source ~/.bashrc
nvm use 20
node -v
```

---

## ✅ Setup Checklist

| Step | Command | Done |
|---|---|---|
| apt updated & build tools installed | `sudo apt install -y build-essential curl` | ☐ |
| Node.js v20 installed | `node -v` → `v20.x.x` | ☐ |
| pnpm enabled | `pnpm -v` | ☐ |
| MySQL installed | `mysql --version` | ☐ |
| MySQL service running | `sudo systemctl status mysql` | ☐ |
| MySQL secured | `mysql_secure_installation` complete | ☐ |
| Database created | `getkenka_local` exists | ☐ |
| App user created | `getkenka@localhost` has privileges | ☐ |
| `.env.local` configured | `DATABASE_TYPE=mysql` set | ☐ |
| Dependencies installed | `pnpm install` | ☐ |
| Schema pushed | `pnpm db:push` | ☐ |
| Dev server running | `http://localhost:3000` loads | ☐ |
