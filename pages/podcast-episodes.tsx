// TODO: Click component to load it or making lazy loading work

import Link from 'next/link';
import dynamic from 'next/dynamic';
import episodeData from '@data/podcastEpisodes';

const Iframe = dynamic(() => import('@utils/Iframe'), {
  loading: () => <h1>L O A D I N G</h1>,
});

const PodcastEpisodes = () => {
  return (
    <div id="podcast-episodes">
      <div className="inner-wrapper">
        <Link href="/">
          <a>GO BACK</a>
        </Link>
        <h1>Podcast Episodes</h1>
        {episodeData.map((data, index) => (
          <Iframe key={index} title={data.title} src={data.src}></Iframe>
        ))}
      </div>
    </div>
  );
};

export default PodcastEpisodes;
