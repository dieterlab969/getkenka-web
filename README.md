# 🥊 GETKENKA

> **getkenka.com** — A private membership community powered by a modern, scalable full-stack architecture.

---

## 📖 Project Overview

**GETKENKA** is a for-profit platform that manages and sells **Lifetime Memberships** to an exclusive private group. The system handles the full membership lifecycle — from public landing and membership application, through secure payment processing, to gated member access.

The business model is straightforward:

1. A visitor discovers GETKENKA and submits a membership request.
2. They are directed to a one-time **Lifetime Membership** payment.
3. Upon successful payment, their account is instantly activated with full member privileges.
4. All future logins are verified against their membership status before granting access to the private group.

The platform is built for reliability, security, and operational simplicity — with no recurring billing complexity and a clean, maintainable codebase.

---

## 🛠️ Tech Stack & Architecture

### Core Technologies

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| ORM / DB Layer | Drizzle ORM (Abstraction Layer) |
| Database | MySQL **or** PostgreSQL (runtime-switchable) |
| Authentication | HttpOnly Cookie Sessions + OAuth (Social Login) |
| Payments | PayPal / PayOS (Webhook-driven) |

---

### 🗄️ Dynamic Database Architecture

GETKENKA uses a **runtime-configurable database** pattern. The active database engine is determined entirely by the `DATABASE_TYPE` environment variable — no code changes required to switch between MySQL and PostgreSQL.

```
DATABASE_TYPE=postgres  →  Uses POSTGRES_URL
DATABASE_TYPE=mysql     →  Uses MYSQL_URL
```

The ORM (Drizzle) acts as the **Abstraction Layer** between business logic and the underlying database engine. All queries are written once in a database-agnostic dialect; the ORM handles dialect translation at the client level.

```
┌─────────────────────────────────────┐
│         Business Logic              │  ← Services Layer (src/core/services)
│     (database-agnostic queries)     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│           Drizzle ORM               │  ← Abstraction Layer (src/db/client.ts)
│     (dialect-aware client init)     │
└──────────┬──────────────────────────┘
           │
     ┌─────┴─────┐
     │           │
 ┌───▼───┐   ┌───▼──────┐
 │ MySQL │   │PostgreSQL│   ← Configured via .env
 └───────┘   └──────────┘
```

---

### 🏛️ Layered Architecture

GETKENKA separates concerns into two primary zones:

#### 1. Client UI Layer — `src/components` + `src/app`

- **React Server Components (RSC):** Handle data fetching, SEO, and initial render server-side. No client JS bundle overhead for static or data-heavy views.
- **Client Components (`"use client"`):** Handle interactivity — forms, modals, real-time feedback, and payment flows.
- **Next.js Middleware (`middleware.ts`):** Intercepts all requests to protected routes, validates the session cookie, and checks membership status before allowing access. Unauthenticated or non-member requests are redirected immediately.

#### 2. Server-Side Business Logic Layer — `src/core/services`

- All domain logic (user creation, membership activation, payment verification) lives in **pure service functions** — completely decoupled from HTTP, UI, or framework concerns.
- Services are called from **Next.js Server Actions** or **API Route Handlers**, never from client components directly.
- This separation makes business logic independently testable and portable.

```
Browser / Client
      │
      ▼
┌─────────────────────────────────────────┐
│  Next.js App Router                     │
│  ┌──────────────┐  ┌──────────────────┐ │
│  │ RSC Pages    │  │ API Route        │ │
│  │ (src/app)    │  │ Handlers         │ │
│  └──────┬───────┘  └────────┬─────────┘ │
│         │  Server Actions   │ Webhooks  │
└─────────┼───────────────────┼───────────┘
          │                   │
          ▼                   ▼
┌─────────────────────────────────────────┐
│  Services Layer (src/core/services)     │
│  UserService │ MembershipService        │
│  PaymentService │ SessionService        │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│  DB Client / ORM (src/db/client.ts)     │
└─────────────────────────────────────────┘
```

---

## 📁 Project Directory Structure

```
getkenka/
├── src/
│   ├── app/                          # Next.js App Router — pages & routes
│   │   ├── (public)/                 # Public-facing routes (no auth required)
│   │   │   ├── page.tsx              # Landing page
│   │   │   ├── login/
│   │   │   │   └── page.tsx          # Login page
│   │   │   └── join/
│   │   │       └── page.tsx          # Membership application / checkout page
│   │   ├── (member)/                 # Protected routes (member-only)
│   │   │   ├── layout.tsx            # Shared member layout (auth guard)
│   │   │   └── dashboard/
│   │   │       └── page.tsx          # Member dashboard
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/    # Auth.js / OAuth callback handlers
│   │   │   │       └── route.ts
│   │   │   └── webhooks/
│   │   │       └── payment/
│   │   │           └── route.ts      # Payment gateway webhook endpoint
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css
│   │
│   ├── core/                         # Business logic — framework-agnostic
│   │   └── services/
│   │       ├── user.service.ts       # User creation, lookup, profile management
│   │       ├── membership.service.ts # Membership activation, status checks
│   │       ├── payment.service.ts    # Payment intent creation, verification
│   │       └── session.service.ts    # Session creation, validation, revocation
│   │
│   ├── db/                           # Database layer
│   │   ├── client.ts                 # Dynamic ORM client (reads DATABASE_TYPE)
│   │   ├── schema.ts                 # Drizzle schema definitions (tables)
│   │   └── migrations/               # Auto-generated migration files
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # Generic primitives (Button, Input, Modal)
│   │   ├── auth/                     # Login form, social login buttons
│   │   ├── membership/               # Checkout card, membership badge
│   │   └── layout/                   # Header, Footer, Nav
│   │
│   └── shared/                       # Cross-cutting utilities & types
│       ├── types/
│       │   ├── user.types.ts         # User & membership TypeScript interfaces
│       │   └── payment.types.ts      # Payment event & status types
│       ├── utils/
│       │   ├── crypto.ts             # HMAC signature verification helpers
│       │   └── format.ts             # Date, currency formatters
│       └── constants/
│           └── membership.ts         # Membership tiers, status enums
│
├── middleware.ts                     # Next.js Middleware — auth & route protection
├── .env.example                      # Environment variable template
├── .env.local                        # Local secrets (git-ignored)
├── drizzle.config.ts                 # Drizzle ORM configuration
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json
└── package.json
```

---

## ✨ Essential Features

### 1. 🔐 Authenticated User Login

GETKENKA implements a multi-layer authentication and authorization system:

#### Authentication (Who are you?)

- **Email / Password:** Credentials are validated against hashed passwords (bcrypt) stored in the database. Plain-text passwords are never stored or logged.
- **Social Login (OAuth):** Providers such as Google or GitHub are supported via Auth.js (NextAuth). The OAuth callback is handled at `src/app/api/auth/[...nextauth]/route.ts`, which upserts the user record and issues a session.
- **Session Issuance:** Upon successful authentication, `SessionService` creates a signed, encrypted session token stored in an **HttpOnly, Secure, SameSite=Strict cookie**. This prevents XSS-based token theft entirely — JavaScript on the client cannot access the session token.

#### Authorization (Are you a member?)

- **Next.js Middleware (`middleware.ts`):** Runs at the Edge before any page or API route is rendered. It:
  1. Reads and verifies the session cookie.
  2. Decodes the session payload and extracts the user's `membershipStatus`.
  3. If `membershipStatus !== 'ACTIVE'`, redirects the request to `/join` (payment wall) or `/login` as appropriate.
  4. If valid, the request proceeds to the protected route with the user context attached.

This ensures that **no protected page can be rendered** without a valid, active membership — even if someone crafts a direct URL request.

```typescript
// middleware.ts (simplified)
export async function middleware(request: NextRequest) {
  const session = await getSession(request);

  if (!session || session.membershipStatus !== 'ACTIVE') {
    return NextResponse.redirect(new URL('/join', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/member/:path*'],
};
```

---

### 2. 💳 Payment Processing

Lifetime Membership purchases are processed through a payment gateway (PayPal or PayOS) using a **Webhook-first architecture** to guarantee reliability.

#### Payment Flow

```
User clicks "Buy Lifetime Membership"
        │
        ▼
PaymentService.createIntent()
→ Creates a payment order/session with the gateway
→ Returns a redirect URL or hosted checkout URL
        │
        ▼
User completes payment on gateway's hosted page
        │
        ▼
Gateway sends POST to /api/webhooks/payment
        │
        ▼
Webhook Handler (route.ts)
  1. Verifies HMAC signature (authenticity check)
  2. Checks idempotency key (deduplication)
  3. Executes DB Transaction:
     - Marks payment record as COMPLETED
     - Sets user.membershipStatus = 'ACTIVE'
     - Records activation timestamp
  4. Returns HTTP 200 to gateway
        │
        ▼
User session is updated on next request via Middleware
→ Full member access granted
```

#### Key Technical Guarantees

| Concern | Implementation |
|---|---|
| **Authenticity** | Every incoming webhook payload is verified against an HMAC-SHA256 signature using a shared secret (`PAYMENT_WEBHOOK_SECRET`). Requests with invalid signatures are rejected with `403 Forbidden`. |
| **Idempotency** | Each payment event carries a unique event ID. Before processing, the handler checks the `payments` table for an existing record with that event ID. Duplicate webhook deliveries (common with gateways) are safely ignored. |
| **Atomicity** | Membership activation is wrapped in a **database transaction**. If any step fails (e.g., the status update), the entire operation rolls back — preventing partial states where a payment is recorded but the user is not activated, or vice versa. |
| **Reliability** | The system relies on the gateway's webhook delivery (with retries) rather than client-side redirects. Even if the user closes their browser after payment, membership activation still occurs. |

```typescript
// src/app/api/webhooks/payment/route.ts (simplified)
export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get('x-webhook-signature') ?? '';

  // 1. Verify authenticity
  if (!verifyHmacSignature(rawBody, signature, process.env.PAYMENT_WEBHOOK_SECRET!)) {
    return new Response('Forbidden', { status: 403 });
  }

  const event = JSON.parse(rawBody);

  // 2. Idempotency check
  const alreadyProcessed = await PaymentService.findByEventId(event.id);
  if (alreadyProcessed) {
    return new Response('OK', { status: 200 }); // Acknowledge, skip processing
  }

  // 3. Atomic DB transaction
  await db.transaction(async (tx) => {
    await PaymentService.recordPayment(tx, event);
    await MembershipService.activateMembership(tx, event.userId);
  });

  return new Response('OK', { status: 200 });
}
```

---

## ⚙️ Environment Setup

Copy `.env.example` to `.env.local` and fill in the values for your environment.

```bash
cp .env.example .env.local
```

### `.env.example`

```dotenv
# ─────────────────────────────────────────────
# APPLICATION
# ─────────────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# ─────────────────────────────────────────────
# DATABASE — Dynamic Configuration
# Set DATABASE_TYPE to either "postgres" or "mysql"
# Only the matching URL needs to be provided.
# ─────────────────────────────────────────────
DATABASE_TYPE=postgres

# Used when DATABASE_TYPE=postgres
POSTGRES_URL=postgresql://user:password@localhost:5432/getkenka

# Used when DATABASE_TYPE=mysql
MYSQL_URL=mysql://user:password@localhost:3306/getkenka

# ─────────────────────────────────────────────
# AUTHENTICATION
# ─────────────────────────────────────────────
AUTH_SECRET=your-auth-secret-min-32-characters-long

# OAuth — Google (optional)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# OAuth — GitHub (optional)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# ─────────────────────────────────────────────
# PAYMENT GATEWAY
# ─────────────────────────────────────────────
# PayPal
PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox   # sandbox | live

# PayOS (alternative)
PAYOS_CLIENT_ID=
PAYOS_API_KEY=
PAYOS_CHECKSUM_KEY=

# Shared webhook verification secret
PAYMENT_WEBHOOK_SECRET=your-webhook-hmac-secret

# Lifetime Membership price in smallest currency unit (e.g., cents / VND)
LIFETIME_MEMBERSHIP_PRICE=9900
```

> **Security Note:** Never commit `.env.local` or any file containing real secrets to version control. The `.env.local` filename is included in `.gitignore` by default in Next.js projects.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/dieterlab969/getkenka-web.git
cd getkenka

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env.local
# Edit .env.local with your database and API credentials

# 4. Push database schema
npx drizzle-kit push

# 5. Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

---

## 📄 License

This project is proprietary software. All rights reserved. Unauthorized copying, distribution, or modification is strictly prohibited.

© 2026 GETKENKA — [getkenka.com](https://getkenka.com)
