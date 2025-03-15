import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';
import { Toaster } from 'sonner';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <Component {...pageProps} />
      <Toaster position="bottom-center" />
    </ThemeProvider>
  );
}

export default App;
