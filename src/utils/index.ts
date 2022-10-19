import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/strict-boolean-expressions
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    /* @ts-expect-error */
    const value = result[key];
    if (isFalsy(value)) {
      /* @ts-expect-error */
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete result[key];
    }
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDebouncedVlue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedVlue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};
