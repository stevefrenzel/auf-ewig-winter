import Iframe from '@utils/Iframe';

interface Props {}

const LatestRelease: React.FC<Props> = () => {
  return (
    <section id="latest-release-container">
      <h2>Latest release</h2>
      <div className="grid-container">
        <article className="video-wrapper left">
          <Iframe
            className="iframe-youtube"
            title="Kora Winter - Hetzjagd"
            src="https://cdn.iframe.ly/jLpli7l?click_to_play=1"
          />
        </article>
        <article className="right">
          <Iframe
            className="iframe-spotify"
            title="Kora Winter - Hetzjagd"
            src="https://open.spotify.com/embed/album/0zKpPmDf6ed9AdxcoZ9fzo"
          />
        </article>
      </div>
      {/* <p>Kora Winter - Hetzjagd</p> */}
    </section>
  );
};

export default LatestRelease;
