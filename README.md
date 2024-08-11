# 🐥 Lil' Birdie Controller

## How to run

There is a `.nvmrc` included that should load up the node version.

This project uses `pnpm` as the package manager. Please install `pnpm` first, and the easiest way to do this is via `homebrew` - [pnpm installation](https://pnpm.io/installation#using-homebrew)

After installing `pnpm`, install the dependencies first by running:

```bash
pnpm install
```

Then, to run the app:

```bash
pnpm dev
```

To run tests:

```bash
pnpm test
```

## Preview

![term_dep_calculator](./docs/term_dep_calculator.png)

## Assumptions

- The term deposit calculator only needs to show the approximate investment results.
- As users, we want to see the total interest earned and the interest earned by the chosen frequency.
- There is a limit to how much you can invest from the principal deposit, how much interest rate and how long you can invest.

## Design decisions

- For simplicity, I used CSS and native form validations to give users feedback if they didn't enter the values correctly.
- To improve the user experience, I added some helper texts for each form field so users can have an idea of what values they can type.
- After clicking the Calculate button, the user inputs were retained. This allowed the user to check how much interest they could earn based on different terms or frequency in years.
- I used data-like objects to pass props to components, avoiding bloated JSX and improving maintainability.
- To help with currency formatting, I used the `Intl.NumberFormat` JS built-in objects.
- To maintain code consistency, I added basic es-lint, prettier, and VSCode settings so any developer can maintain the same settings.
- As an anti-fan of `enums`, I utilised an `EnumAlternativeType` utility type that works the same way as `enums`. [Why TypeScript enums suck](https://blog.logrocket.com/why-typescript-enums-suck/).

## Tech stack

- React-ts through Vite, as recommended by React
- Vitest and Testing-library for unit tests
- CSS

## Trade-offs

- Due to the time limitation and for the sake of simplicity, I don't use a UI framework and rely on extending the standard CSS taken from the bootstrapped Vite template.
- I would love to include additional tests, particularly to examine user interactions, to guarantee that the outcomes are displayed as intended. Therefore, the unit tests for the calculator function reflect how the result appears on the webpage.
- I would add a simple CI/CD to help ensure merging is safe and that there are no tests failing if there are any changes.
- I would also improve the user experience in the form inputs so that they can't enter the values that are not supported. At the moment, if the user enters unexpected values, they will only see an error message.
- I would clean up the files better, especially separating the types into their own file.

## Resources

Thanks to the following resources to help me learn about compound interest and verify the calculation tests:

- [Compound Interest Formula With Examples](https://www.thecalculatorsite.com/finance/calculators/compound-interest-formula).
- [Simple & Compound Interest Calculator](https://goodcalculators.com/simple-and-compound-interest-calculator/) - where I based the simple calculation.
- The simple UI design is based on and inspired by [Finder's Term Deposit Calculator](https://www.finder.com.au/term-deposits/term-deposit-calculator)

---

<sub>This React-ts project is bootstrapped with [`Vite`](https://vitejs.dev). Built with `Node v20.11.1`, packaged with `pnpm`.</sub>

---

<sub>**Crafted with care ❤ (within a very limited time) by a-sh. in 2024**</sub>
