# 📦 Docker React App

This repository provides a Docker-based environment for running a **Next.js** application in **production**.

---

## 🚀 Quick Start

### 1. Set up environment variables (optional)

```bash
cp .env.template .env
```

You can customize options in `.env` if needed.

---

### 2. Build and Start the Production Container

```bash
make up
```

This will build the Docker image and start the container.

The app will be accessible at:

```
http://localhost:3000
```

---

## 🛠️ Useful Commands

| Command     | Description                          |
|:------------|:-------------------------------------|
| `make up`   | Build and start the production server |
| `make down` | Stop and remove the container         |

---

## 📂 Project Structure

```
/project_root
├── .devcontainer/   # DevContainer environment (development only)
├── infra/docker/    # Dockerfiles and infrastructure configs
├── src/             # Next.js project
├── docker-compose.yml
├── Makefile
└── README.md (this file)
```

---

## 📚 For Development

If you want to use a **DevContainer** for active development (with hot reload, flexible environment, etc.), please refer to:

📖 `.devcontainer/README.md`

It explains how to:
- Create the Next.js app inside the container
- Use `make create` / `make dev` for development
- Reopen VSCode in container

---

## ⚙️ Notes
- Production image uses **Ubuntu 22.04** base with minimal setup.
- Only **production dependencies** are installed inside the container.
- The Next.js app is built during Docker image creation (`npm run build`).
- The server runs using `next start`.
- How do I press and hold a key and have it repeat in VSCode?
```
$ defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false

```

---

## 📝 Blog Workflow

This repository contains a static blog generator.

1. **Write posts**: Place Markdown files in `src/public/markdowns`. Each file can
   start with front matter containing `title` and `date`.

2. **Generate pages**: Run `npm run generate` in the `src` directory. This
   converts the Markdown files into pages under `src/app/posts/articles/` and
   updates `src/app/posts/page.tsx`.

3. **Build the site**: Execute `npm run build` to generate static files in the
   `docs/` directory.

4. **Publish**: Commit the generated files and push them to make your posts
   available.
