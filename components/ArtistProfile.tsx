// TODO: Improve user experience by indicating content is being loaded

import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';

interface DataProps {
  title: string;
  description?: string;
  src: string;
}

interface Props {
  artistName: string;
  artistPicture: StaticImageData;
  spotifyFollowUrl: string;
  videoData?: DataProps[];
  musicData: DataProps[];
  socialData?: DataProps[];
}

const ArtistProfile: NextPage<Props> = ({
  artistName,
  artistPicture,
  spotifyFollowUrl,
  videoData,
  musicData,
  socialData,
}) => {
  return (
    <div id="artist-profile">
      <Link href="/">
        <a>GO BACK</a>
      </Link>
      <h1>{artistName}</h1>
      <Image src={artistPicture} alt={artistName} layout="intrinsic" />
      <br />
      <iframe
        src={spotifyFollowUrl}
        width="100%"
        height="56"
        scrolling="no"
        frameBorder="0"
      ></iframe>
      <h2>Videos</h2>
      {videoData &&
        videoData.map((data) => (
          <article key={data.title}>
            <iframe
              src={data.src}
              title={data.title}
              allow="fullscreen"
              loading="lazy"
              frameBorder="0"
            ></iframe>
            <p>{data.description}</p>
            <br />
          </article>
        ))}
      <h2>Music</h2>
      {musicData.map((data) => (
        <article key={data.title}>
          <iframe
            src={data.src}
            title={data.title}
            loading="lazy"
            width="100%"
            height="80"
            frameBorder="0"
          ></iframe>
          <br />
        </article>
      ))}
      <h2>Social</h2>
      {socialData &&
        socialData.map((data) => (
          <article key={data.title}>
            <a href={data.src}>{data.title}</a>
            <br />
          </article>
        ))}
    </div>
  );
};

export default ArtistProfile;
