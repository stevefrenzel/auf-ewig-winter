<template>
  <div class="container">
    <h1>HAXAN</h1>

    <YouTubePlayer url="//cdn.iframe.ly/gkDi71H?playerjs=1&amp;click_to_play=true" />

    <SpotifyFollowButton
      url="https://open.spotify.com/follow/1/?uri=spotify:artist:5VARgwnLSbKfnZZvYFWTUu&size=detail&theme=dark"
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
  </div>
</template>

<script>
  const YouTubePlayer = () =>
    import(/* webpackChunkName: "YouTube Player" */ '../components/YouTubePlayer');
  const SpotifyFollowButton = () =>
    import(/* webpackChunkName: "Spotify Follow Button" */ '../components/SpotifyFollowButton');
  const SpotifyAndMedia = () =>
    import(/* webpackChunkName: "Spotify & Media" */ '../components/SpotifyAndMedia');

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
          {
            id: 7,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/music/m/Bsjzakrbrog4kvzie6bmla7lyw4',
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
          {
            id: 15,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/music/m/Bqajcn2hpbmpg5jqfbtqimv4tda',
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

  .youtube-player {
    border: none;
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
    h1 {
      font-size: 2.5rem;
      padding-top: 0;
    }
    .youtube-player {
      width: 100%;
      height: 315px;
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
    .youtube-player {
      width: 560px;
      height: 315px;
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
    .youtube-player {
      width: 840px;
      height: 473px;
    }
  }
</style>
