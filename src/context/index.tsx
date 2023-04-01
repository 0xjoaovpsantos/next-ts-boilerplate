//Hooks
import { CountProvider } from '@/context/Count';

//Interfaces
import { ReactNode } from 'react';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => {
  return <CountProvider>{children}</CountProvider>;
};
