# 🐥 Lil' Birdie Controller

## How to run

There is a `.nvmrc` included that should load up the node version.

This project uses `pnpm` as the package manager. Please install `pnpm` first, and the easiest way is via `homebrew` - [pnpm installation](https://pnpm.io/installation#using-homebrew).

After installing `pnpm`, install the dependencies first by running:

```bash
pnpm install
```

Then, to run the app:

```bash
pnpm dev
```

View the development on the browser: `http://localhost:5173/`.

To run tests:

```bash
pnpm test
```

## Preview

![preview of app](./docs/preview.png)

## Assumptions

- Ta

## Design decisions

- I used `TypeScript` to improve the code quality by writing more reliable and especially maintainable code. The benefit of static typing to `JavaScript` will help prevent errors in development. 
- To maintain code consistency for collaborative work, I added basic `es-lint`, `prettier`, and VSCode settings (`.vscode`).
- I utilised an `EnumAlternativeType` utility type as an alternative to `enums`. [Why TypeScript enums suck](https://blog.logrocket.com/why-typescript-enums-suck/).

## Tech stack

- React-ts through Vite, as recommended by React
- Vitest and Testing-library for unit testing
- `styled-components` and native CSS

## Trade-offs

- Text

---

<sub>This React-ts project is bootstrapped with [`Vite`](https://vitejs.dev). Built with `Node v20.11.1`, packaged with `pnpm`.</sub>

---

<sub>**Crafted with care ❤ (within a very limited time) by a-sh. in 2024**</sub>
