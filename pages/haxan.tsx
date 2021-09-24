import { videos, music, social } from '@data/haxan';
import photo from '@images/haxan.jpeg';
import ArtistProfile from '@components/ArtistProfile';

const Haxan = () => {
  return (
    <ArtistProfile
      artistName="HAXAN"
      artistPicture={photo}
      spotifyFollowUrl="https://open.spotify.com/follow/1/?uri=spotify:artist:5VARgwnLSbKfnZZvYFWTUu?si=ccb1YJWpSqmR8aigSW3QKQ&dl_branch=1&size=detail&theme=dark"
      videoData={videos}
      musicData={music}
      socialData={social}
    />
  );
};

export default Haxan;
