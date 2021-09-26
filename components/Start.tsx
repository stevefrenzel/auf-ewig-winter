import Image from 'next/image';
import logo from '@images/aew-logo-horizontal.png';
import { video, music, merch } from '@data/latestRelease';

const Start = () => {
  return (
    <section id="start-container">
      <figure>
        <Image src={logo} alt="Auf ewig winter logo" />
      </figure>
      <p>Record label based in Berlin, Germany</p>
      <h2>Latest release</h2>
      {/* <iframe
        className="iframe-youtube"
        src={video.src}
        title={video.title}
        allow="fullscreen"
        loading="lazy"
      ></iframe>
      <p>{video.description}</p> */}
      <h2>Latest merch</h2>
    </section>
  );
};

export default Start;
