import Link from 'next/link';
import episodeData from '@data/podcastEpisodes';

const PodcastEpisodes = () => {
  return (
    <div id="podcast-episodes">
      <Link href="/">
        <a>GO BACK</a>
      </Link>
      <h1>Podcast Episodes</h1>
      {episodeData.map((data) => (
        <iframe
          key={data.src}
          title={data.title}
          src={data.src}
          loading="lazy"
        ></iframe>
      ))}
    </div>
  );
};

export default PodcastEpisodes;
