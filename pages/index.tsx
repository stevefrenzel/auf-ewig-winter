import Navigation from '@components/Navigation';
import Intro from '@components/Intro';
import ArtistsOverview from '@components/ArtistsOverview';
import Shop from '@components/Shop';
import Podcast from '@components/Podcast';
// import LegalNotice from '@components/LegalNotice';

const Home = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div id="scroll-snap">
        <Intro />
        <ArtistsOverview />
        <Shop />
        <Podcast />
        {/* <LegalNotice /> */}
      </div>
    </>
  );
};

export default Home;
