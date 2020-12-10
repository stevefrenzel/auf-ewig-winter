<template>
  <div class="container">
    <h1>KORA WINTER</h1>

    <YouTubePlayer
      url="//cdn.iframe.ly/0KJzmqZ?playerjs=1&amp;click_to_play=true"
    />

    <SpotifyFollowButton
      url="https://open.spotify.com/follow/1/?uri=spotify:artist:3yrMI0nTunPO2waZSzP1wj&size=detail&theme=dark"
    />

    <SpotifyAndMedia
      heading="Deine Freunde (kommen alle in die Hölle) | Kaputtmacher Session - 2020"
      spotifyUrl="https://open.spotify.com/embed/album/2vcncyzUUF4TKj88Ynqqy0"
      :linkCollection="linksDeineFreunde"
    />

    <SpotifyAndMedia
      heading="BITTER - 2020"
      spotifyUrl="https://open.spotify.com/embed/album/0rlhNo56LgYcBrHTvBrE4y"
      :linkCollection="linksBitter"
    />

    <SpotifyAndMedia
      heading="Welk - 2017"
      spotifyUrl="https://open.spotify.com/embed/album/1aj7iAfh1c1io39LPNi3t1"
      :linkCollection="linksWelk"
    />

    <SpotifyAndMedia
      heading="Blüht - 2015"
      spotifyUrl="https://open.spotify.com/embed/album/5rXw9rHkAbbsjegFTu5PuD"
      :linkCollection="linksBlueht"
    />

    <div class="bottom-container">
      <span v-for="item in mediaLinks" :key="item.id">
        <a class="bottom-link" :href="item.url"
          ><font-awesome-icon
            class="bottom-icon"
            :icon="[item.iconType, item.icon]"
            :size="item.iconSize"
        /></a>
      </span>
    </div>
  </div>
</template>

<script>
  const YouTubePlayer = () =>
    import(
      /* webpackChunkName: "YouTube Player" */ '../components/YouTubePlayer'
    );
  const SpotifyFollowButton = () =>
    import(
      /* webpackChunkName: "Spotify Follow Button" */ '../components/SpotifyFollowButton'
    );
  const SpotifyAndMedia = () =>
    import(
      /* webpackChunkName: "Spotify & Media" */ '../components/SpotifyAndMedia'
    );

  export default {
    name: 'KoraWinter',
    components: { YouTubePlayer, SpotifyFollowButton, SpotifyAndMedia },
    data() {
      return {
        mediaLinks: [
          {
            id: 'shop-link',
            url: 'https://korawinter.bandcamp.com/merch',
            iconType: 'fas',
            icon: 'shopping-cart',
            iconSize: '2x',
          },
          {
            id: 'instagram-link',
            url: 'https://www.instagram.com/korawinter/',
            iconType: 'fab',
            icon: 'instagram',
            iconSize: '3x',
          },
          {
            id: 'facebook-link',
            url: 'https://www.facebook.com/korawinterband',
            iconType: 'fab',
            icon: 'facebook',
            iconSize: '3x',
          },
          {
            id: 'youtube-link',
            url: 'https://www.youtube.com/channel/UCBP_NZMedZzJpvR9LD2aaiw',
            iconType: 'fab',
            icon: 'youtube-square',
            iconSize: '3x',
          },
        ],
        linksDeineFreunde: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/track/48uVDDUegkGGGO27T4crTL',
          },
          {
            id: 2,
            icon: 'bandcamp',
            title: 'Bandcamp',
            url:
              'https://korawinter.bandcamp.com/track/deine-freunde-kommen-alle-in-die-h-lle-kaputtmacher-session',
          },
          {
            id: 4,
            icon: 'apple',
            title: 'Apple Music',
            url:
              'https://music.apple.com/de/album/deine-freunde-kommen-alle-in-die-h%C3%B6lle-kaputtmacher/1501313479?i=1501313480&app=music',
          },
          {
            id: 5,
            icon: 'amazon',
            title: 'Amazon Music',
            url:
              'https://music.amazon.de/albums/B085DYRF1V?trackAsin=B085DX3S5C',
          },
          {
            id: 6,
            icon: 'napster',
            title: 'Napster',
            url:
              'https://napster.com/kora-winter/deine-freunde-kommen-alle-in-die-holle-kaputtmacher-session/deine-freunde-kommen-alle-in-die-holle-kaputtmacher-session',
          },
        ],
        linksBitter: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/0rlhNo56LgYcBrHTvBrE4y',
          },
          {
            id: 2,
            icon: 'bandcamp',
            title: 'Bandcamp',
            url: 'https://korawinter.bandcamp.com/album/bitter',
          },
          {
            id: 3,
            icon: 'soundcloud',
            title: 'SoundCloud',
            url: 'https://soundcloud.com/korawinterband/sets/bitter',
          },
          {
            id: 4,
            icon: 'apple',
            title: 'Apple Music',
            url: 'https://music.apple.com/de/album/bitter/1481042976?app=music',
          },
          {
            id: 5,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://music.amazon.de/albums/B07VMDFZXT',
          },
          {
            id: 6,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/kora-winter/bitter-single',
          },
        ],
        linksWelk: [
          {
            id: 9,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/1aj7iAfh1c1io39LPNi3t1',
          },
          {
            id: 10,
            icon: 'bandcamp',
            title: 'Bandcamp',
            url: 'https://korawinter.bandcamp.com/album/welk',
          },
          {
            id: 11,
            icon: 'soundcloud',
            title: 'SoundCloud',
            url: 'https://soundcloud.com/korawinterband/sets/welk',
          },
          {
            id: 12,
            icon: 'apple',
            title: 'Apple Music',
            url:
              'https://music.apple.com/de/album/welk-ep/1224158236?app=music',
          },
          {
            id: 13,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://music.amazon.de/albums/B06Y3LNQP1',
          },
          {
            id: 14,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/kora-winter/welk',
          },
        ],
        linksBlueht: [
          {
            id: 16,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/5rXw9rHkAbbsjegFTu5PuD',
          },
          {
            id: 17,
            icon: 'bandcamp',
            title: 'Bandcamp',
            url: 'https://korawinter.bandcamp.com/album/bl-ht',
          },
          {
            id: 18,
            icon: 'soundcloud',
            title: 'SoundCloud',
            url: 'https://soundcloud.com/korawinterband/sets/bluht-ep-2015',
          },
          {
            id: 19,
            icon: 'apple',
            title: 'Apple Music',
            url:
              'https://music.apple.com/de/album/bl%C3%BCht/947376528?app=music',
          },
          {
            id: 21,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://music.amazon.de/albums/B00QH3PR5M',
          },
          {
            id: 22,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/kora-winter/bluht',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .container {
    background-color: #101010;
    padding-top: 69px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/backgrounds/kora-winter-background-min.jpg');
    background-size: 500px;
    background-attachment: fixed;
    background-blend-mode: darken;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  h1 {
    font-size: 3rem;
    padding: 20px 0 20px 0;
  }

  .follow-button {
    margin-top: 30px;
    width: 840px;
    height: 56px;
  }

  /* BOTTOM LINKS */

  .bottom-container {
    display: flex;
    width: 666px;
    margin: 30px 0 15px 0;
    justify-content: space-around;
    align-items: center;
  }
  .bottom-link {
    color: #fff;
    transition: 0.2s ease;
  }
  .bottom-link:hover {
    color: #e4252c;
  }

  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .container {
      width: 100%;
    }
    h1 {
      font-size: 2.5rem;
      padding-top: 0;
    }
    .bottom-container {
      width: 100%;
    }
    .bottom-link {
      font-size: 1rem;
    }
    .bottom-icon {
      font-size: 1.5rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 2.5rem;
      padding-top: 0;
    }
    .bottom-container {
      width: 560px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
      padding: 20px 0 20px 0;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }
</style>
