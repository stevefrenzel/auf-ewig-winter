<template>
  <main class="container">
    <h1>HAXAN</h1>

    <YouTubePlayer
      url="//cdn.iframe.ly/Y4CcAWI?playerjs=1&click_to_play=true&iframe=1"
    />

    <SpotifyFollowButton
      url="https://open.spotify.com/follow/1/?uri=spotify:artist:5VARgwnLSbKfnZZvYFWTUu&size=detail&theme=dark"
    />

    <SpotifyAndMedia
      heading="AMMONIAK - 2020"
      spotifyUrl="https://open.spotify.com/embed/album/4btHiAXha6zMw2ZUbrQd79"
      :linkCollection="linksAmmoniak"
    />

    <SpotifyAndMedia
      heading="RAW/WAR (Instrumental) - 2020"
      spotifyUrl="https://open.spotify.com/embed/album/0bKEX0OcWxW5fZGyG8jr0V"
      :linkCollection="linksRawWar"
    />

    <SpotifyAndMedia
      heading="WAR - 2020"
      spotifyUrl="https://open.spotify.com/embed/album/6ziQUTTFQJsBvFMikOiV0t"
      :linkCollection="linksWar"
    />

    <SpotifyAndMedia
      heading="RAW - 2019"
      spotifyUrl="https://open.spotify.com/embed/album/6OEiUjGTm9QuFPReOspC5b"
      :linkCollection="linksRaw"
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
  </main>
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
          // {
          //   id: 'shop-link',
          //   url: 'https://korawinter.bandcamp.com/merch',
          //   iconType: 'fas',
          //   icon: 'shopping-cart',
          //   iconSize: '2x',
          // },
          {
            id: 'instagram-link',
            url: 'https://www.instagram.com/haxan030/',
            iconType: 'fab',
            icon: 'instagram',
            iconSize: '3x',
          },
          {
            id: 'facebook-link',
            url: 'https://www.facebook.com/HAXAN030/',
            iconType: 'fab',
            icon: 'facebook',
            iconSize: '3x',
          },
          {
            id: 'youtube-link',
            url: 'https://www.youtube.com/channel/UCIE-US9NVCGmUML4gfE1_SA',
            iconType: 'fab',
            icon: 'youtube-square',
            iconSize: '3x',
          },
        ],
        linksAmmoniak: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/track/4ECpNQptTCe2fbP37irash',
          },
          {
            id: 2,
            icon: 'apple',
            title: 'Apple Music',
            url:
              'https://music.apple.com/de/album/ammoniak/1537954839?i=1537954840&app=music',
          },
          {
            id: 3,
            icon: 'amazon',
            title: 'Amazon Music',
            url:
              'https://music.amazon.de/albums/B08MC9PLFN?trackAsin=B08MC7VN1Z',
          },
        ],
        linksRawWar: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/0bKEX0OcWxW5fZGyG8jr0V',
          },
          {
            id: 2,
            icon: 'apple',
            title: 'Apple Music',
            url:
              'https://music.apple.com/de/album/raw-war-instrumental/1534764783?app=music',
          },
          {
            id: 3,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://music.amazon.de/albums/B08KT1KT4M',
          },
          {
            id: 4,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/haxan/raw-war-instrumental',
          },
        ],
        linksWar: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/6ziQUTTFQJsBvFMikOiV0t',
          },
          {
            id: 2,
            icon: 'bandcamp',
            title: 'Bandcamp',
            url: 'https://haxan030.bandcamp.com/album/war',
          },
          {
            id: 3,
            icon: 'soundcloud',
            title: 'SoundCloud',
            url: 'https://soundcloud.com/haxan030/sets/war',
          },
          {
            id: 4,
            icon: 'apple',
            title: 'Apple Music',
            url: 'https://music.apple.com/de/album/war-ep/1499376113?app=music',
          },
          {
            id: 5,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://music.amazon.de/albums/B084X8W6Q1',
          },
          {
            id: 6,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/haxan/war-444888155',
          },
        ],
        linksRaw: [
          {
            id: 9,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/6OEiUjGTm9QuFPReOspC5b',
          },
          {
            id: 10,
            icon: 'bandcamp',
            title: 'Bandcamp',
            url: 'https://haxan030.bandcamp.com/album/raw',
          },
          {
            id: 11,
            icon: 'soundcloud',
            title: 'SoundCloud',
            url: 'https://soundcloud.com/haxan030/sets/raw-ep',
          },
          {
            id: 12,
            icon: 'apple',
            title: 'Apple Music',
            url: 'https://music.apple.com/de/album/raw-ep/1477616157?app=music',
          },
          {
            id: 13,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://music.amazon.de/albums/B07W7VN6B5',
          },
          {
            id: 14,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/haxan/raw-396959642',
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
    background-image: url('../assets/backgrounds/haxan-background-min.jpg');
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
      /* background-color: lightblue; */
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
