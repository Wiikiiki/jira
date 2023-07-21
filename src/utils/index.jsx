import { useEffect, useState } from "react";

const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// TODO: 看不懂防抖捏

// DEBOUNCE
// const debounce = (func, delay) => {
//   let timer;
//   return () => {if(timer) {
//     clearTimeout(timer)
//   }
//    timer = setTimeout(() => {
//     func()
//   }, delay);}
// };

// const debouncedFunc = debounce(func, 1000)

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};
