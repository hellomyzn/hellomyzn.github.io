# 📦 Docker Dev Environment for Next.js

This repository provides a **DevContainer-based** Docker environment for Next.js development.

---

## 🚀 Quick Start

### 1. Set up environment variables

```bash
cp .env.template .env
```

You can customize options in `.env` if needed.

---

### 2. Create a Next.js project

```bash
make create
```

This will generate a fresh Next.js project under `/src` inside the container.

---

### 3. Open the container in VSCode

Click **"Reopen in Container"** in VSCode.

This will start the DevContainer automatically.

---

### 4. Start the development server

```bash
make dev
```

The app will start on:

```
http://localhost:3000
```

---

## 🛠️ Useful Commands

| Command       | Description                                   |
| :------------ | :-------------------------------------------- |
| `make create` | Create a new Next.js project (one-time setup) |
| `make dev`    | Start the development server                  |
| `make down`   | Stop the containers                           |

---

## ⚙️ Notes

- This environment uses **Volta** for managing Node.js and npm versions.
- All configurations (port, working directories, options for create-next-app) can be modified in `.env`.

---

## 📂 .env Configuration

The `.env` file contains the following environment variables:

| Variable                                | Description                                    |
| :-------------------------------------- | :--------------------------------------------- |
| `PROJECT_NAME`                          | Name of the Docker container project           |
| `USER_NAME`, `GROUP_NAME`, `UID`, `GID` | Linux user settings inside the container       |
| `PROJECT_DIR`, `WORKDIR`, `VOLTA_HOME`  | Directory paths for workspace setup            |
| `WEB_PUBLISHED_PORT`                    | Port for the Next.js dev server (default 3000) |
| `PRISMA_STUDIO_PUBLISHED_PORT`          | Port for Prisma Studio (default 5555)          |
| `DB_PUBLISHED_PORT`                     | Database port if needed (default 5432)         |
| `CNA_USE_TYPESCRIPT`                    | Whether to use TypeScript in the project       |
| `CNA_USE_ESLINT`                        | Whether to use ESLint                          |
| `CNA_USE_TAILWIND`                      | Whether to use Tailwind CSS                    |
| `CNA_USE_SRC_DIR`                       | Whether to use `src/` directory structure      |
| `CNA_USE_APP_ROUTER`                    | Whether to use App Router (Next.js 13+)        |
| `CNA_USE_TURBOPACK`                     | Whether to use Turbopack                       |
| `CNA_CUSTOMIZE_ALIAS`                   | Whether to customize the import alias          |
