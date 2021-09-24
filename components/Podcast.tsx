import Link from 'next/link';

const Podcast = () => {
  return (
    <section id="podcast">
      <h1>Podcast</h1>
      <iframe
        src="https://open.spotify.com/embed/show/6P3GrTJDW22sxod54f1kRs?theme=0"
        width="100%"
        height="232"
        frameBorder="0"
        loading="lazy"
      ></iframe>
      <p>
        Ein Podcast von AUF EWIG WINTER und Gästen über Kreativität,
        Leidenschaft und die Kunst des Machens.
      </p>
      <Link href="/podcast-episodes">
        <a>Alle Episoden anzeigen</a>
      </Link>
    </section>
  );
};

export default Podcast;
