import Image from 'next/image';
import Link from 'next/link';
import artistData from '@data/artists';

const Artists = () => {
  return (
    <section id="artists">
      <h2>Artists</h2>
      {artistData.map((data) => (
        <div key={data.name}>
          <h3>{data.name}</h3>
          <Image
            src={data.image}
            alt={data.alt}
            width="300"
            height="300"
            placeholder="blur"
            // Adjust color according to final design:
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          <br />
          <Link href={data.link}>
            <a>{data.name}</a>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Artists;
