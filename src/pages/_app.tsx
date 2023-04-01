//Hooks
import { AppProvider } from '@/context';

//Styles
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

//Interfaces
import type { AppProps } from 'next/app';

//Components
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <ToastContainer/>
    </AppProvider>
  );
}
