import { videos, music, social } from '@data/koraWinter';
import koraWinter from '@images/kora-winter.jpeg';
import ArtistProfile from '@components/ArtistProfile';

const KoraWinter = () => {
  return (
    <ArtistProfile
      artistName="Kora Winter"
      artistPicture={koraWinter}
      spotifyFollowUrl="https://open.spotify.com/follow/1/?uri=spotify:artist:3yrMI0nTunPO2waZSzP1wj?si=hwR96uN6TOuWWrZTO4ETPQ&dl_branch=1&size=detail&theme=dark"
      videoData={videos}
      musicData={music}
      socialData={social}
    />
  );
};

export default KoraWinter;
