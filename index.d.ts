interface InputValue<T> {
  value: T,
  onChange: (event: HTMLInputElement) => undefined,
}

export default function useInputValue<T>(initialValue: T): InputValue<T>;
