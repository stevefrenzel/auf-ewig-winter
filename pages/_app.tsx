import '@styles/globals.scss';
import '@styles/reset.css';
import '@styles/podcast-episodes.scss';
import '@components/Navigation/navigation.scss';
import '@components/Intro/intro.scss';
import '@components/Spotlight/spotlight.scss';
import '@components/ArtistsOverview/artists-overview.scss';
import '@components/ArtistProfile/artist-profile.scss';
import '@components/Shop/shop.scss';
import '@components/Podcast/podcast.scss';
import '@components/Newsletter/newsletter.scss';
import '@components/Footer/footer.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
