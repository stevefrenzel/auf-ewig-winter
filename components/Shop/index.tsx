import Image from 'next/image';
import { merch, music } from '@data/shop';

const Shop = () => {
  return (
    <section id="shop-container">
      <div className="inner-wrapper">
        <h2>Shop</h2>
        <h3>Merch</h3>
        <div className="reel">
          {merch.map((data, index) => (
            <article className="image-and-text" key={index}>
              <a href={data.url} rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.description}
                  width={400}
                  height={400}
                  placeholder="blur"
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
                />
                <p>{data.description}</p>
              </a>
            </article>
          ))}
        </div>
        <br />
        <h3>Music</h3>
        <div className="reel">
          {music.map((data, index) => (
            <article className="image-and-text" key={index}>
              <a href={data.url} rel="noopener noreferrer">
                <Image
                  src={data.image}
                  alt={data.description}
                  width={400}
                  height={400}
                />
                <p>{data.description}</p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
