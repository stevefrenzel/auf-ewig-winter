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
    <section id="latest-release-container">
      <h2>Spotlight</h2>
      <div className="grid-container">
        <div className="left">
          <figure>
            <Image src={photo} alt="Gargoyle by Haxan" />
          </figure>
        </div>
        <div className="right">
          <h3>
            New single &quot;Gargoyle&quot; by <Link href="/haxan">HAXAN</Link>{' '}
            out now!
          </h3>
          <Iframe
            className="iframe-spotify"
            title="Haxan - Gargoyle"
            src="https://open.spotify.com/embed/album/1wDaOqlW5qKMzq6cLPSgdW"
          />
        </div>
      </div>
      <h3>Music video</h3>
      <article className="video-wrapper">
        <Iframe
          className="iframe-youtube"
          title="HAXAN - Gargoyle"
          src="https://cdn.iframe.ly/D2RMIHY?click_to_play=1"
        />
      </article>
      <h3>Social Media</h3>
      <ul>
        {social.map((item) => (
          <li key={item.title}>
            <figure>
              <Image src={item.icon} alt="" />
            </figure>
            <a href={item.src}>{item.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Spotlight;
