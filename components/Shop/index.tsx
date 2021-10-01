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
                  width={300}
                  height={300}
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
                  width={300}
                  height={300}
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
