import Image from 'next/image';
import Link from 'next/link';
import Iframe from '@utils/Iframe';
import photo from '@images/artists/haxan/gargoyle.jpg';
import instagram from '@images/logos/instagram.svg';
import youtube from '@images/logos/youtube.svg';
import facebook from '@images/logos/facebook.svg';
import email from '@images/logos/email.svg';
import { social } from '@data/haxan';

const icons = [instagram, youtube, facebook, email];

interface Props {}

const Spotlight: React.FC<Props> = () => {
  return (
    <section className="bg-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 text-black">
      <h2 className="text-4xl text-center py-12">Spotlight</h2>
      <div className="grid grid-cols-none lg:grid-cols-2 gap-4">
        <figure>
          <Image src={photo} alt="Gargoyle by Haxan" />
        </figure>
        <div className="flex flex-col justify-center">
          <h3 className="pb-4">
            New single &quot;Gargoyle&quot; by <Link href="/haxan">HAXAN</Link>{' '}
            out now! Listen to it on Spotify, Apple Music, Tidal or any major
            platform!
          </h3>
          <Iframe
            className="iframe-spotify"
            title="Haxan - Gargoyle"
            src="https://open.spotify.com/embed/album/1wDaOqlW5qKMzq6cLPSgdW"
          />
        </div>
      </div>
      <h3 className="text-4xl text-center py-12">Music video</h3>
      <article className="video-wrapper">
        <Iframe
          className="iframe-youtube"
          title="HAXAN - Gargoyle"
          src="https://cdn.iframe.ly/D2RMIHY?click_to_play=1"
        />
      </article>
      <h3 className="text-4xl text-center py-12">Social Media</h3>
      <ul>
        {social.map((item) => (
          <li key={item.title} className="flex">
            <figure className="pr-1">
              <Image src={item.icon} alt="" />
            </figure>
            <a className="text-black" href={item.src}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Spotlight;
