# VueCssQuestion

This repo started off as a styling/ refactor challenge. I have fleshed it out abit to be a more scalable extendable solution use Vue and FE development best practices in general.

## Key focus points
- Composable for stateful logic, this doesnt quite require state management solutions like pinia at this stage - composable is a good alternative - Also gives clean separation of concerns between UI and business logic
- Organized folder structure with clear separation of concerns
- Separate reusable IconButton compoent inside separate ui/ folder
- Tests to cover both visual states and behavioral events
- Utils for common stateless logic that is handy to have across the system
- Typescript support with strict typing - separated types in a types/ folder 
- EsLint
- Tailwind for styling
- Responsive design
- Event driven communication to handle pinning logic

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
