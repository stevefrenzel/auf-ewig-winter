import '@styles/globals.scss';
import '@styles/reset.css';
import '@styles/podcast-episodes.scss';
import '@styles/artist-profile.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
