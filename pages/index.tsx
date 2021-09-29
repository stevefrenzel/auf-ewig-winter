import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('@components/Navigation'));
const Intro = dynamic(() => import('@components/Intro'));
const LatestRelease = dynamic(() => import('@components/LatestRelease'));
const ArtistsOverview = dynamic(() => import('@components/ArtistsOverview'));
const Shop = dynamic(() => import('@components/Shop'));
const Podcast = dynamic(() => import('@components/Podcast'));
const Newsletter = dynamic(() => import('@components/Newsletter'));
const Footer = dynamic(() => import('@components/Footer'));

const Home = () => {
  return (
    <>
      <Navigation />
      <Intro />
      <main id="main">
        <LatestRelease />
        <ArtistsOverview />
        <Shop />
        <Podcast />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};

export default Home;
