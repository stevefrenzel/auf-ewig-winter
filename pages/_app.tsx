import '@styles/globals.scss';
import '@styles/reset.css';
import '@styles/intro.scss';
import '@styles/artists-overview.scss';
import '@styles/shop.scss';
import '@styles/podcast.scss';
import '@styles/podcast-episodes.scss';
import '@styles/artist-profile.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
