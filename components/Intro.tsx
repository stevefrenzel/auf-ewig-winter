import Image from 'next/image';
import logo from '@images/aew-logo-horizontal.png';

const Intro = () => {
  return (
    <section className="flex flex-col justify-center w-full h-screen px-6 sm:px-8 md:px-10 bg-gradient-to-t from-gray-200">
      <figure>
        <Image src={logo} alt="Auf ewig winter logo" />
      </figure>
      <p className="text-right">Record label based in Berlin, Germany</p>
    </section>
  );
};

export default Intro;
