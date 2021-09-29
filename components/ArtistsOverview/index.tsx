// TODO: Enable keyboard focus for image

import Image from 'next/image';
import Link from 'next/link';
import artistData from '@data/artists';

const Artists = () => {
  return (
    <section id="artists-overview-container">
      <h2>Artists</h2>
      <div className="grid">
        {artistData.map((data, index) => (
          <Link key={index} href={data.link} passHref>
            <div className="image-text-container">
              <Image src={data.image} alt={data.alt} width="400" height="400" />
              <p>{data.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Artists;
