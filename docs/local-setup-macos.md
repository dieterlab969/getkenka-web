# 🛠️ Local Development Setup — macOS

**Project:** GetKenka | **Platform:** macOS (native, no Docker) | **Est. time: < 5 minutes**

---

## Prerequisites & Quick Install

You need **Homebrew** installed before proceeding. If you don't have it yet:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Node.js, pnpm, and MySQL

Run the following in a single pass:

```bash
# Install Node.js v20 LTS
brew install node@20

# Link node@20 to your PATH (required if another Node version is already installed)
brew link node@20 --force --overwrite

# Verify Node version — must be 20.x or higher
node -v

# Install pnpm globally
npm install -g pnpm

# Verify pnpm
pnpm -v

# Install MySQL (Community Edition)
brew install mysql
```

### Start & Stop MySQL Service

```bash
# Start MySQL (runs in background, auto-restarts on login)
brew services start mysql

# Stop MySQL
brew services stop mysql

# Restart MySQL
brew services restart mysql

# Check service status
brew services list | grep mysql
```

> **Note:** On Apple Silicon (M1/M2/M3), Homebrew installs to `/opt/homebrew`. On Intel Macs, it's `/usr/local`. Commands above work identically on both architectures.

---

## Database Initialization

### Secure the MySQL Root User

A fresh Homebrew MySQL install has **no root password** by default. Run the secure installation wizard first:

```bash
mysql_secure_installation
```

When prompted, choose a strong root password and answer **Yes** to all remaining security questions.

### Log In and Create the Local Database

```bash
mysql -u root -p
```

Once inside the MySQL shell, run:

```sql
-- Create the local development database
CREATE DATABASE getkenka_local CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Confirm it was created
SHOW DATABASES;

-- Exit the shell
EXIT;
```

### Configure Your `.env.local` File

Copy the example env file and open it:

```bash
cp .env.example .env.local
```

Update the database-related variables in `.env.local`:

```dotenv
# ── Database ───────────────────────────────────
DATABASE_TYPE=mysql
MYSQL_URL=mysql://root:YOUR_ROOT_PASSWORD@localhost:3306/getkenka_local

# ── Application ────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

> Replace `YOUR_ROOT_PASSWORD` with the password you set during `mysql_secure_installation`.

---

## Project Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Push the Database Schema

This applies your ORM schema to the local database (no migration files needed on first run):

```bash
pnpm db:push
```

Expected output:

```
[✓] Changes applied to getkenka_local
```

### 3. Start the Development Server

```bash
pnpm dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. The app should be running.

---

## 🩺 Troubleshooting (macOS Specific)

### ❌ `Access denied for user 'root'@'localhost'`

This means the password in your `MYSQL_URL` is wrong, or the root user requires socket authentication instead of a password.

**Fix — reset root to password auth:**

```bash
# Connect via socket (no password needed when MySQL just installed)
mysql -u root

# Inside MySQL shell:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_NEW_PASSWORD';
FLUSH PRIVILEGES;
EXIT;
```

Then update `MYSQL_URL` in `.env.local` with the new password.

---

### ❌ Port 3306 Already in Use

Another process (a previous MySQL install or a system service) is occupying port 3306.

**Identify what's using the port:**

```bash
lsof -i :3306
```

**Option A — Kill the conflicting process:**

```bash
# Replace <PID> with the process ID shown by lsof
kill -9 <PID>
# Then restart MySQL
brew services restart mysql
```

**Option B — Run MySQL on a different port:**

Edit the MySQL config file:

```bash
# Intel Mac
nano /usr/local/etc/my.cnf

# Apple Silicon
nano /opt/homebrew/etc/my.cnf
```

Add or change:

```ini
[mysqld]
port = 3307
```

Then update your `.env.local` accordingly:

```dotenv
MYSQL_URL=mysql://root:YOUR_PASSWORD@localhost:3307/getkenka_local
```

Restart the service: `brew services restart mysql`

---

### ❌ `brew services start mysql` — Service Fails to Start

MySQL may have a corrupted data directory from a previous failed install.

**Check MySQL error logs:**

```bash
# Intel Mac
cat /usr/local/var/mysql/$(hostname).err

# Apple Silicon
cat /opt/homebrew/var/mysql/$(hostname).err
```

**Reinitialize the data directory (destructive — only for fresh installs):**

```bash
brew services stop mysql
rm -rf /opt/homebrew/var/mysql   # use /usr/local/var/mysql on Intel
mysqld --initialize-insecure --user=$(whoami)
brew services start mysql
```

> ⚠️ This wipes all local MySQL data. Only run this on a brand-new install where no data exists.

---

### ❌ `command not found: pnpm` After Install

Your shell profile may not include the npm global bin path.

```bash
# Add to ~/.zshrc (macOS default shell)
echo 'export PATH="$HOME/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Verify
pnpm -v
```

---

### ❌ `node: command not found` After `brew install node@20`

The versioned formula requires a manual link step:

```bash
brew link node@20 --force --overwrite
# Then reload your shell
source ~/.zshrc
node -v  # should show v20.x.x
```

---

## ✅ Setup Checklist

| Step | Command | Done |
|---|---|---|
| Homebrew installed | `/bin/bash -c "$(curl ...)"` | ☐ |
| Node.js v20 installed | `node -v` → `v20.x.x` | ☐ |
| pnpm installed | `pnpm -v` | ☐ |
| MySQL running | `brew services list` | ☐ |
| Database created | `getkenka_local` exists | ☐ |
| `.env.local` configured | `DATABASE_TYPE=mysql` set | ☐ |
| Dependencies installed | `pnpm install` | ☐ |
| Schema pushed | `pnpm db:push` | ☐ |
| Dev server running | `http://localhost:3000` loads | ☐ |
