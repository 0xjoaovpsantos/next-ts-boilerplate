//React imports
import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface CountData {
  count: number;
  setCount: (value: number) => void;
}

export const CountContext = createContext<CountData>(
  {} as CountData,
);

export function CountProvider({ children }: { children: ReactNode}) {
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);

  return context;
}
