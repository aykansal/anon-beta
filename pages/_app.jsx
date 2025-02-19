import Provider from '@/components/Provider';
import '@/styles/globals.css';
import { Toaster } from 'sonner';

function App({ Component, pageProps }) {
  return (
    <Provider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
      <Toaster />
    </Provider>
  );
}

export default App;
