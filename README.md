# News Website Monorepo (Frontend)

A modern news website with an administrative panel built using TypeScript and React. This monorepo contains the frontend
applications and shared UI components, configurations, and type definitions to maintain consistency across the platform.

## 📋 Project Overview

This monorepo is built using NX as the build system and workspace management tool, containing frontend applications and
shared packages. The project utilizes a shared component library based on Shadcn UI to ensure consistent design and user
experience. The backend is maintained in a separate repository built with Spring Boot.

## 📦 Repository Structure

```text 
├── apps/          # Application packages
│ ├── client/           # Public news website
│ └── admin/            # Administrative panel
├── packages/      # Shared packages
│ ├── ui/               # Shared UI components based on Shadcn UI
│ ├── config/           # Shared configuration files
│ └── types/            # Shared TypeScript types and interfaces
```

## 🚀 Tech Stack

### Frontend (This Repository)

- React
- TypeScript
- Vite
- Shadcn UI
- Tailwind CSS
- TanStack Query
- TanStack Router
- React Hook Form
- Zod

### Backend (Separate Repository)

- Java 21
- MySQL
- Spring Boot
- Spring Security

### Build Tools

- pnpm
- NX

## 🛠️ Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- pnpm
- nx
- Backend server running


### Installation and Setup

1. Install dependencies:

```bash
pnpm install
```
2. Set up environment variables in each app directory (`apps/admin/.env` and `apps/client/.env`):

```bash
VITE_BE_URL=your_backend_url_here
```
3. Development command:

```bash
nx run-many --target=dev --projects=admin,ui,types,client --parallel=true
```
4. Build command:

```bash
nx run-many --target=build --projects=admin,ui,types,client --parallel=true
```

## 🌟 Features

### News Website
- Responsive design for all devices
- Article categorization
- Dynamic content loading

### Admin Panel
- Secure JWT authentication
- Article creation and management
- Media upload and management

### Shared Features
- Reusable UI components through @packages/ui
- Type-safe development with shared types from @packages/types
- Consistent configurations via @packages/config
