import Navigation from '@components/Navigation';
import Start from '@components/Start';
import Artists from '@components/Artists';
import Shop from '@components/Shop';
import Podcast from '@components/Podcast';
import LegalNotice from '@components/LegalNotice';

const Home = () => {
  return (
    <>
      <Navigation />
      <Start />
      <Artists />
      <Shop />
      <Podcast />
      <LegalNotice />
    </>
  );
};

export default Home;
