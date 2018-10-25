# `@rehooks/input-value`

> React hook for creating input values

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/input-value
```

## Usage

```js
import useInputValue from '@rehooks/input-value';

function MyComponent() {
  let name = useInputValue('Jamie');
  // name = { value: 'Jamie', onChange: [Function] }
  return <input {...name}/>;
}
```
