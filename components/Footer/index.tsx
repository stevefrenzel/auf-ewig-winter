// TODO: Fix CSS issues

import Image from 'next/image';
import instagram from '@images/logos/instagram.svg';
import youtube from '@images/logos/youtube.svg';
import facebook from '@images/logos/facebook.svg';
import email from '@images/logos/email.svg';

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Image src={instagram} alt="" />
          <a
            href="https://www.instagram.com/aufewigwinter/"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <Image src={youtube} alt="" />
          <a
            href="https://www.youtube.com/channel/UC_PWRVbYIbazxwLfLJsLTFA"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
        <li>
          <Image src={facebook} alt="" />
          <a
            href="https://www.facebook.com/aufewigwinter"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <Image src={email} alt="" />
          <a href="mailto: info@aufewigwinter.de">E-Mail</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
