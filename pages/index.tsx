import Navigation from '@components/Navigation';
import Start from '@components/Start';
import ArtistsOverview from '@components/ArtistsOverview';
import Shop from '@components/Shop';
import Podcast from '@components/Podcast';
// import LegalNotice from '@components/LegalNotice';

const Home = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div id="scroll-snap">
        <Start />
        <ArtistsOverview />
        <Shop />
        <Podcast />
        {/* <LegalNotice /> */}
      </div>
    </>
  );
};

export default Home;
