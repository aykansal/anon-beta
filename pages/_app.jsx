import Provider from '@/components/Provider';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Provider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
        <Component {...pageProps} />
    </Provider>
  );
}

export default App;