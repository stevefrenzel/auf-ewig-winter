// TODO: Improve user experience by indicating content is being loaded

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';
import Iframe from '@utils/Iframe';

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
      <div className="inner-wrapper">
        <Link href="/" scroll={false}>
          <a>GO BACK</a>
        </Link>
        <div className="image-text-container">
          <Image src={artistPicture} alt={artistName} layout="intrinsic" />
          <h1>{artistName}</h1>
        </div>
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
              <div className="video-wrapper">
                <iframe
                  className="iframe-youtube"
                  src={data.src}
                  title={data.title}
                  allow="fullscreen"
                  loading="lazy"
                ></iframe>
              </div>
              <p>{data.description}</p>
            </article>
          ))}
        <h2>Music</h2>
        {musicData.map((data) => (
          <article key={data.title}>
            <iframe
              className="iframe-spotify"
              src={data.src}
              title={data.title}
              loading="lazy"
            ></iframe>
            <p>{data.description}</p>
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
    </div>
  );
};

export default ArtistProfile;
