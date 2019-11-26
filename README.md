<div align="center">
  <h1>
    <div style="font-size:68px;">🎨</div>
    React Design System Boilerplate
  </h1>
  <h4 align="center">This is a boilerplate for you to create your own design system in React. It has everything setup to allow you to focus on what it is you care about: creating awesome, reusable components.</h4>
</div>

---

Docs TODO:

- examples for how to create new entrypoints

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [How To Use](#how-to-use)
- [Core tools and technologies](#core-tools-and-technologies)
- [Overview of your design system](#overview-of-your-design-system)
  - [Understanding Theme UI](#understanding-theme-ui)
    - [Create your theme](#create-your-theme)
    - [Style your UI](#style-your-ui)
  - [Theme UI components](#theme-ui-components)
  - [Design tokens and theming](#design-tokens-and-theming)
    - [Using design-system-utils](#using-design-system-utils)
- [Code](#code)
  - [Anatomy of a component directory](#anatomy-of-a-component-directory)
- [Build and compilation](#build-and-compilation)
- [Build scripts and commands](#build-scripts-and-commands)
- [Tooling](#tooling)
- [Publishing your package to npm](#publishing-your-package-to-npm)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```sh
# Clone this repository
$ git clone https://github.com/mrmartineau/react-design-system-starter.git

# Go into the repository
$ cd react-design-system-starter

# Install dependencies
$ yarn install

# That's it, now create your own design system 🎉
```

## Core tools and technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- Components
  - [Theme UI](https://theme-ui.com/) - Build consistent, themeable React apps based on constraint-based design principles.
  - [Emotion](https://emotion.sh/) - CSS-in-JS library used by Theme UI
  - [design-system-utils 👩‍🎨](https://github.com/mrmartineau/design-system-utils) - Easy access to your design tokens
- Component sandboxes
  - [Storybook](https://storybook.js.org/) - Storybook is a tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.
  - [Playroom](https://github.com/seek-oss/playroom) - Playroom allows you to simultaneously design across a variety of themes and screen sizes, powered by JSX and your own component library.
- Testing
  - [Jest](https://jestjs.io/) - testing framework
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Compilation/Bundling
  - [Preconstruct](https://preconstruct.tools/) - Module bundler based on Rollup and various other technologies
  - [Babel](https://babeljs.io/)
- Linting
  - [ESLint](https://eslint.org/)
  - [Stylelint](https://stylelint.io)

## Overview of your design system

### Understanding Theme UI

[Theme UI](https://theme-ui.com/) provides a constraint-based approach to component creation and themeing. This allows you and your team to create a design system that supports the widest

To fully understand Theme UI and all that it provides, please read and understand the documentation at https://theme-ui.com/getting-started.

#### Create your theme

Create a theme object to include custom color, typography, and layout values. Read more about this in the [Theme UI docs](https://theme-ui.com/theming).

```js
// example theme.js
export const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}
```

Add the theme to **your application** with the `ThemeProvider`, passing in the theme object as a prop.

```jsx
// basic usage
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { theme } from 'your-design-system/tokens'
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
```

#### Style your UI

This is an example of how a new component could be created without using Emotion's `styled.div` syntax. Read more about this method in the [Theme UI docs](https://theme-ui.com/sx-prop)

```jsx
/** @jsx jsx */
import { jsx } from 'theme-ui'
export default props => (
  <h1
    sx={{
      color: 'primary',
      fontFamily: 'heading',
    }}
  >
    Hello
  </h1>
)
```

### Theme UI components

The optional `@theme-ui/components` package includes pre-built UI components to make styling a page with Theme UI quicker. This package includes components for layouts, grids, buttons, form elements, and more. The main highlight, in my opinion, is the `Box` component that so flexible I predict you will use it almost everywhere.

```jsx
import { Box } from '@theme-ui/components'

export const SomeComponent = (
  <Box p={4} color="white" bg="primary">
    Beep
  </Box>
)
```

Find out more in the [Theme UI component docs](https://theme-ui.com/components).

### Design tokens and theming

Design tokens are an important part of any design system, so this repo has been setup with 2 ways for your components to make use of these tokens: [design-system-utils 👩‍🎨](https://github.com/mrmartineau/design-system-utils) and [Theme UI](https://theme-ui.com/).

**Theme UI** takes care of tokens using it's theme object and is the basis for your components and applications consuming your components.

**design-system-utils** is used when you need access to specific values from your tokens from anywhere in, or indeed outside, your application. It makes it really easy to store your design tokens in an organised way and reference them in your components.

All tokens-related files can be found in the `src/tokens` directory.

```js
.
├── colorPalette.ts
├── index.ts
├── theme.ts
├── tokens.models.ts
├── tokens.stories.ts
└── tokens.ts
```

#### Using design-system-utils

[design-system-utils 👩‍🎨](https://github.com/mrmartineau/design-system-utils) has already setup with this design system.

[`src/tokens/tokens.ts`](https://github.com/mrmartineau/react-design-system-starter/blob/master/src/tokens/tokens.ts) is the entry point used with design-system-utils. Please read the [design-system-utils docs](https://github.com/mrmartineau/design-system-utils) to find out all about this very useful library, or see below for a few simple examples:

```js
tokens.get('radii')
```

## Code

This is a basic view of the project's directory. All React components are located in the `src/components` directory. Your design tokens, which are managed by **design-system-utils**.

```js
.
├── build // the directory for compiled files
├── jest.config.js
├── playroom.config.js
├── src
│   ├── buttons.ts // an example entry file for a subset of
│   ├── components
│   │   ├── Button
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.ts
│   │   │   ├── README.md
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── index.ts // this is the main project entry file
│   ├── intro.story.mdx
│   └── tokens
│       ├── colorPalette.ts
│       ├── index.ts
│       ├── theme.ts
│       ├── tokens.models.ts
│       ├── tokens.stories.ts
│       └── tokens.ts
├── types
└── yarn.lock
```

Test files use `*.test.ts(x)` or `*.spec.ts(x)`

Any file with `*.story.tsx` or `*.stories.tsx`, or `*.story.mdx` or `*.stories.mdx` can be used by Storybook. The `*.mdx` extensions are used for documentation.

### Anatomy of a component directory

E.g. a `Button` found in the `/src/components` directory.

```js
.
├── Button.tsx // < component code
├── README.md // < component documentation
├── Button.story.tsx // < component story
├── Button.test.tsx // < component tests
├── __snapshots__
│   └── Button.test.tsx.snap // < auto-generated snapshot code
└── index.ts // < component entry file
```

## Build and compilation

- Simple, one file bundle
- grouped files

## Build scripts and commands

- `yarn build`: Compile a production build with [Rollup](https://rollupjs.org/)
- `yarn watch`: Compile/watch with Rollup. This is useful in conjunction with `yarn link`.
- `yarn storybook`: Run Storybook development environment
- `yarn playroom`: Run Playroom
- `yarn format`: Format all JS with [Prettier](https://prettier.io)
- `yarn lint`: Lint JS and CSS-in-JS
- `yarn lint:js`: Lint JS with [ESLint](https://eslint.org/)
- `yarn lint:css`: Lint CSS-in-JS with [Stylelint](https://stylelint.io)
- `yarn size`: Test the file size of the build
- `yarn size:why`: Analyse the the build
- `yarn test`: Run all tests
- `yarn test:js`: Run all JS tests with [Jest](https://jestjs.io/)
- `yarn test:coverage`: Run a code coverage test with Jest
- `yarn test:watch`: Run test suite while watching for changes

## Tooling

The boilerplate uses various tools to ensure better code quality. Defaults have been set for linting and code style, but can easily be overridden according to your needs.

- Prettier
- Eslint
- Stylelint
- Husky
- lint-staged

## Publishing your package to npm

There is a pre-build script that is be run by npm when you publish (`npm run prebuild`)

## License

[MIT](https://choosealicense.com/licenses/mit/)

> Made by [Zander ⚡](https://github.com/mrmartineau/)
