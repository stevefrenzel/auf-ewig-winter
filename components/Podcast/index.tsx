import Link from 'next/link';

const Podcast = () => {
  return (
    <section id="podcast-container">
      <div className="inner-wrapper">
        <h2>Podcast</h2>
        <iframe
          src="https://open.spotify.com/embed/show/6P3GrTJDW22sxod54f1kRs?theme=0"
          loading="lazy"
        ></iframe>
        <p>
          Ein Podcast von AUF EWIG WINTER und Gästen über Kreativität,
          Leidenschaft und die Kunst des Machens.
        </p>
        <Link href="/podcast-episodes">
          <a>Alle Episoden anzeigen</a>
        </Link>
      </div>
    </section>
  );
};

export default Podcast;
