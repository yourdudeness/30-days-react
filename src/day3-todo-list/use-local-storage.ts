import { useState } from "react";

export type TodoType = { id: string; text: string; done: boolean };
export default function useLocalStorage<T>(keyName: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(keyName);
    return stored ? JSON.parse(stored) : initialValue;
  });

  function handleChange(item: T) {
    localStorage.setValue(keyName, JSON.stringify(item));
    setValue(item);
  }

  return [value, handleChange] as const;
}
