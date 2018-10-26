interface InputValue<T> {
  value: T,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => undefined,
}

export default function useInputValue<T>(initialValue: T): InputValue<T>;
