<div align="center">
  <h1>
    <div style="font-size:68px;">🎨</div>
    React Design System Boilerplate
  </h1>
  <h4 align="center">This is a boilerplate for you to create your own design system in React. It has everything setup to allow you to focus on what it is you care about: creating awesome, reusable components.</h4>
</div>

<hr />

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```sh
# Clone this repository
$ git clone https://github.com/mrmartineau/react-design-system-starter.git

# Go into the repository
$ cd react-design-system-starter

# Install dependencies
$ npm install

# That's it! 🎉
```

## Tools and technologies used in this package

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled components 💅](https://www.styled-components.com/) (can easily be swapped with another CSS-in-JS) library
  - [design-system-utils 👩‍🎨](https://github.com/mrmartineau/design-system-utils) - Easy access to your design tokens
  - [Styled System](https://styled-system.com/)
- [Storybook](https://storybook.js.org/) - Storybook is an open source tool for developing UI components in isolation for React. It makes building stunning UIs organized and efficient.
- [Playroom](https://github.com/seek-oss/playroom) - Playroom allows you to simultaneously design across a variety of themes and screen sizes, powered by JSX and your own component library.
- [Jest](https://jestjs.io/) - testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Rollup](https://rollupjs.org/) - module bundler
  - [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io)

## Code

This is a basic view of the project's directory. All React components are located in the `src/components` directory. Your design tokens, which are managed by **design-system-utils**.

```js
.
├── build // the directory for compiled files
├── jest.config.js
├── playroom.config.js
├── rollup.config.js // build config
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
│   ├── info.story.ts
│   └── tokens
│       ├── colorPalette.ts
│       ├── index.ts
│       ├── styledSystemTheme.ts
│       ├── tokens.models.ts
│       ├── tokens.stories.ts
│       └── tokens.ts
├── types
└── yarn.lock
```

Test files use `*.test.ts(x)` or `*.spec.ts(x)`

Any file with `*.story.tsx` or `*.stories.tsx` can be used by Storybook.

### Anatomy of a component directory

E.g. A `Button` found in the `/src/components` directory.

```
.
├── Button.tsx // < component code
├── README.md // < component documentation
├── Button.story.tsx // < component story
├── Button.test.tsx // < component tests
├── __snapshots__
│   └── Button.test.tsx.snap // < auto-generated snapshot code
└── index.ts // < component entry file
```

### Design tokens and theming

Design tokens are an important part of any design system, so this repo has been setup with 2 ways for your components to make use of these tokens: design-system-utils and Styled System.

All design tokens-related files can be found in the `src/tokens` directory.

#### Using design-system-utils

[design-system-utils 👩‍🎨](https://github.com/mrmartineau/design-system-utils) has already setup with this design system. It makes it really easy to store your design tokens in an organised way and reference them in your components.

**[`src/tokens/tokens.ts`](https://github.com/mrmartineau/react-design-system-starter/blob/master/src/tokens/tokens.ts)** is the entry point used with design-system-utils. Please read the design-system-utils docs to find out all about this very useful library, or see below for a few simple examples:

```js
import styled from 'styled-components'
import { tokens } from '../../tokens'

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 20px;
  border-radius: ${tokens.get('radii')};
  padding: 0.3em 1em;
`
```

#### Using Styled System

Styled System's theme object is slightly different from design-system-utils' theme object. If you use design-system-utils as the **master**, you can then import only the necessary parts into **[`styledSystemTheme.ts`](https://github.com/mrmartineau/react-design-system-starter/blob/master/src/tokens/styledSystemTheme.ts)** which should be used for Styled System. See below for how to setup Styled System:

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styledSystemTheme'

export default props => (
  <ThemeProvider theme={theme}>{/* application elements */}</ThemeProvider>
)
```

And here is the same `Button` component, that we saw above, using Styled System.

```tsx
import styled from 'styled-components'
import { space, SpaceProps, color, ColorProps } from 'styled-system'
import { tokens } from '../../tokens'

type ButtonProps = SpaceProps, ColorProps;

export const Button = styled.button<ButtonProps>`
  background-color: #fff;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 20px;
  border-radius: ${tokens.get('radii')};
  padding: 0.3em 1em;
  ${space};
  ${color};
`
```

Here are some usage examples of this component:

```jsx
<div>
  <Button onClick={} m={3}>Click me</Button>
  <Button onClick={} color="red">Click me</Button>
</div>
```

- how the tokens can drive styled-system

## Build and compilation

- Simple, one file bundle
- grouped files

## Build scripts and commands

- `yarn build`: Compile a production build with [Rollup](https://rollupjs.org/)
- `yarn watch`: Compile/watch with Rollup. This is useful in conjuction with `yarn link`.
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

The boilerplate uses various tools to ensure better code quality. Defaults have been set for linting and code style, but can easily be overriden according to your needs.

- Prettier
- Eslint
- Stylelint
- Husky
- lint-staged

## Publishing your package to npm

There is a pre-build script that is be run by npm when you publish (`npm run prebuild`)

## License

[MIT](https://choosealicense.com/licenses/mit/)

> Made by [ZΛNDΞR ⚡](https://github.com/mrmartineau/)
