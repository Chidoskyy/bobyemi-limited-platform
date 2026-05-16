# Bobyemi Limited Platform Architecture

## System Overview

The Bobyemi Limited Platform is designed as a scalable modular monolith architecture.

The system combines:
- Public marketing website
- Internal business operations dashboard
- Authentication system
- Notification system
- Centralized business database

The architecture is intentionally designed to:
- support future scaling,
- reduce operational complexity,
- simplify deployment,
- and improve maintainability.

---

# High-Level Architecture

```plaintext
Users
│
├── Customers
├── Staff
├── Technicians
├── Managers
└── Admin

        │
        ▼

Next.js Frontend Application
│
├── Public Website
├── Authentication
├── Internal Dashboard
└── API Routes

        │
        ▼

Supabase Backend Services
│
├── PostgreSQL Database
├── Authentication
├── Storage
└── Row Level Security

        │
        ├── SMS Service
        └── Email Service
```

---

# Architecture Style

## Selected Architecture
Modular Monolith

## Why

The modular monolith approach was selected because it:
- simplifies MVP development,
- reduces infrastructure complexity,
- improves developer productivity,
- allows easier maintenance,
- supports future scaling,
- and can later evolve into microservices if needed.

---

# Frontend Architecture

## Framework
Next.js

## Planned Structure

```plaintext
src/
├── app/
│   ├── (marketing)/
│   ├── (auth)/
│   ├── dashboard/
│   └── api/
│
├── components/
├── lib/
├── services/
├── hooks/
├── types/
└── styles/
```

---

# Backend Architecture

## Initial Backend Strategy
Next.js API Routes

## Future Possibility
Dedicated backend services if scaling demands increase.

Possible future migration:
- NestJS
- Express
- Microservices

---

# Database Architecture

## Database
PostgreSQL

## Provider
Supabase

## Core Planned Tables

### Users
- id
- name
- email
- role
- phone_number

### Transactions
- id
- type
- amount
- customer_name
- customer_phone
- staff_id
- created_at

### Repairs
- id
- customer_name
- device_type
- issue_description
- technician_id
- repair_status
- estimated_cost

### Notifications
- id
- type
- recipient
- status
- sent_at

---

# Authentication Strategy

## Authentication Provider
Supabase Authentication

## Planned Roles
- Admin
- Manager
- Staff
- Technician

---

# Notification System

## SMS
Planned providers:
- Termii
- Twilio

## Email
Planned providers:
- Resend
- SendGrid

---

# Deployment Strategy

## Frontend Hosting
Vercel

## Backend Services
Supabase Cloud

---

# Scalability Strategy

The system is being designed to support future scaling through:
- modular code organization,
- clean API separation,
- centralized business logic,
- reusable components,
- role-based authorization,
- and service abstraction.

Future scalability possibilities:
- microservices,
- Docker orchestration,
- Kubernetes,
- background jobs,
- analytics pipelines,
- audit systems.

---

# Security Considerations

Planned security features:
- authentication
- authorization
- protected routes
- environment variable management
- database access policies
- HTTPS-only deployment

---

# Current Architecture Phase

Phase 1:
- Product planning
- Documentation
- Landing page architecture
- MVP definition