import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppContextProvider } from '../context/Context';
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider initializeOnMount={false}>
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
    </MoralisProvider>
  );
}

export default MyApp;