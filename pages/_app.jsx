import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Toaster } from 'sonner';
import { ActionProvider } from '@/context/ActionContext';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <ActionProvider>
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </ActionProvider>
    </ThemeProvider>
  );
}

export default App;
