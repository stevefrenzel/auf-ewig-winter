import Image from 'next/image';
import Link from 'next/link';
import artistData from '@data/artists';
import haxan from '@images/haxan.jpeg';
import koraWinter from '@images/kora-winter.jpeg';
import nolaTheGalgo from '@images/nola-the-galgo.jpg';

const Artists = () => {
  return (
    <section id="artists-overview-container">
      <div className="inner-wrapper">
        <h2>Artists</h2>
        <div className="reel">
          {artistData.map((data) => (
            <>
              <figure>
                <Image
                  src={data.image}
                  alt={data.alt}
                  width="400"
                  height="400"
                />
              </figure>
              <Link href={data.link}>
                <a>{data.name}</a>
              </Link>
            </>
          ))}
          {/* <figure>
            <Image src={haxan} alt="" width="400" height="400" />
          </figure>
          <figure>
            <Image src={koraWinter} alt="" width="400" height="400" />
          </figure>
          <figure>
            <Image src={nolaTheGalgo} alt="" width="400" height="400" />
          </figure> */}
        </div>

        {/* {artistData.map((data) => (
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
        ))} */}
      </div>
    </section>
  );
};

export default Artists;
