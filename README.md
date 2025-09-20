# Film Browser

A React + Express application for browsing films. Server-side rendering with Vite and React Query. Includes state management with Zustand (far less boilerplate than Redux, don't worry, I know how to use it) and testing with vitest (and end-to-end with Cypress).

I use the Express server to provide the films list instead of an external API.

## Requirements

- Node.js >= 20
- npm

## Installation

```bash
npm i
```

## Scripts

- **Development server**

  ```bash
  npm run dev
  ```

- **Lint**

  ```bash
  npm run lint
  ```

- **Format code**

  ```bash
  npm run format
  ```

- **Unit tests**

  ```bash
  npm run test
  ```

- **Watch tests**

  ```bash
  npm run test:watch
  ```

- **Open Cypress**

  ```bash
  npm run cypress:open
  ```

- **Run Cypress E2E tests**

  ```bash
  npm run test:e2e
  ```

## Project Structure

```
src/
├─ frontend/      React components, pages, hooks, and store
├─ server/        Express server, routes, controllers, data
└─ shared/        Types, constants, mocks
```

## Features

- React Query for data fetching
- Zustand for wishlist state management
- Server-side rendering with Vite
- SCSS for styling
- Fully typed with TypeScript
- Unit and snapshot tests with Vitest
- E2E tests with Cypress
