import Image from 'next/image';
import Link from 'next/link';
import artistData from '@data/artists';
import haxan from '@images/haxan.jpeg';
import koraWinter from '@images/kora-winter.jpeg';
import nolaTheGalgo from '@images/nola-the-galgo.jpg';

const Artists = () => {
  return (
    <section id="artists-overview-container">
      <h2>Artists</h2>
      <div className="inner-wrapper">
        <div className="grid-container">
          {artistData.map((data) => (
            <Link href={data.link} key={data.link} passHref>
              <div className="image-text-container">
                <Image
                  src={data.image}
                  alt={data.alt}
                  width="300"
                  height="300"
                />
                <p>{data.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
