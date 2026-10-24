# CoAsio Documentation

Official documentation for **[CoAsio](https://github.com/coasio/coasio)** — a modern C++23 coroutine runtime built on standalone Asio, featuring a dedicated multi-threaded work-stealing scheduler, structured concurrency, and cooperative cancellation trees.

Built with [Astro Starlight](https://starlight.astro.build/) and styled with a custom minimalist dark aesthetic.

## Quick Start

```bash
# Install dependencies
yarn install

# Start local development server (background mode per AGENTS.md)
yarn astro dev --background

# View server status and logs
yarn astro dev status
yarn astro dev logs

# Stop dev server
yarn astro dev stop

# Build production bundle and search index (Pagefind)
yarn build
```

## Documentation Structure

* **`src/content/docs/getting-started/`**: Compiler requirements (GCC 12+, MSVC 19.33+ / VS 2022), CMake integration, and first coroutine task.
* **`src/content/docs/concepts/`**: Core runtime model (`task<T>`, symmetric transfer, work-stealing scheduler, cancellation trees, lifetimes).
* **`src/content/docs/guides/`**: Practical recipes for TCP sockets, stream & random-access files, combinators (`select`, `race`, `join`, `timeout`), channels, and offloading blocking work.
* **`src/content/docs/reference/`**: Detailed specifications for networking, filesystem APIs, error codes, and cancellation contracts.
* **`src/content/docs/internals/`**: Architectural documentation covering the dual-engine model, scheduler implementation, and testing methodology.

## Design Philosophy

- **Human-Centric & Focused**: Vermillion accent (`#e05344`), obsidian dark theme (`#0c0d11`), clean monospace accents, zero visual clutter.
- **Accurate to Code**: All API signatures, types, and return values mirror the active C++ codebase in `coasio`.
