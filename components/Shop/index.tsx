import Image from 'next/image';
import { merch, music } from '@data/shop';

const Shop = () => {
  return (
    <section id="shop-container">
      <h1>Shop</h1>
      <h2>Merch</h2>
      {merch.map((data, index) => (
        <div key={index}>
          <Image
            src={data.image}
            alt={data.description}
            width={300}
            height={300}
          />
          <p>{data.description}</p>
        </div>
      ))}
      <h2>Music</h2>
      {music.map((data, index) => (
        <div key={index}>
          <Image
            src={data.image}
            alt={data.description}
            width={300}
            height={300}
          />
          <p>{data.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Shop;
