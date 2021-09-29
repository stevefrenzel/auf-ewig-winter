import Image from 'next/image';
import logo from '@images/aew-logo-horizontal.png';

const Intro = () => {
  return (
    <section id="intro-container">
      <figure>
        <Image src={logo} alt="Auf ewig winter logo" />
      </figure>
      <p>Record label based in Berlin, Germany</p>
    </section>
  );
};

export default Intro;
