<template>
  <div class="container">
    <h1>HAXAN</h1>
    <!-- YOUTUBE PLAYER -->
    <iframe
      class="youtube-player"
      height="315"
      src="https://www.youtube-nocookie.com/embed/fHiLIokd2Pg"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <!-- WAR RELEASE -->
    <h2>"WAR"</h2>
    <iframe
      class="spotify-player"
      src="https://open.spotify.com/embed/album/6ziQUTTFQJsBvFMikOiV0t"
      height="240"
      frameborder="0"
      allowtransparency="true"
    ></iframe>
    <button v-on:click="toggle('war')">
      {{ showWarLinks ? 'SHOW LESS' : 'SHOW MORE' }}
    </button>
    <template v-if="showWarLinks">
      <div class="link-collection">
        <span v-for="item in linksWar" :key="item.id" class="media-link">
          <a :href="item.url" rel="noopener">
            <font-awesome-icon :icon="['fab', item.icon]" size="1x" />
            {{ item.title }}</a
          >
        </span>
      </div>
    </template>
    <!-- RAW RELEASE -->
    <h2>"RAW"</h2>
    <iframe
      class="spotify-player"
      src="https://open.spotify.com/embed/album/6OEiUjGTm9QuFPReOspC5b"
      height="210"
      frameborder="0"
      allowtransparency="true"
    ></iframe>
    <button v-on:click="toggle('raw')">
      {{ showRawLinks ? 'SHOW LESS' : 'SHOW MORE' }}
    </button>
    <template v-if="showRawLinks">
      <div class="link-collection">
        <span v-for="item in linksRaw" :key="item.id" class="media-link">
          <a :href="item.url" rel="noopener">
            <font-awesome-icon :icon="['fab', item.icon]" size="1x" />
            {{ item.title }}</a
          >
        </span>
      </div>
    </template>
    <!-- SOCIAL MEDIA LINKS -->
    <div class="social-media-container">
      <span v-for="item in socialMedia" :key="item.id">
        <a :href="item.url" class="social-media-link"
          ><font-awesome-icon :icon="['fab', item.icon]" size="3x"
        /></a>
      </span>
    </div>
    <!-- <router-link :to="{ name: 'Artists' }">GO BACK</router-link> -->
  </div>
</template>

<script>
  export default {
    name: 'Haxan',
    data() {
      return {
        showWarLinks: false,
        showRawLinks: false,
        socialMedia: [
          { id: 'instagram-link', url: 'https://www.instagram.com/haxan030/', icon: 'instagram' },
          { id: 'facebook-link', url: 'https://www.facebook.com/HAXAN030/', icon: 'facebook' },
          {
            id: 'youtube-link',
            url: 'https://www.youtube.com/channel/UCIE-US9NVCGmUML4gfE1_SA',
            icon: 'youtube-square',
          },
        ],
        linksWar: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/6ziQUTTFQJsBvFMikOiV0t?si=6g6APWqOQkuxd4IHPQGJIg',
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
            url: 'https://soundcloud.com/user-13279481/sets/haxan-war',
          },
          {
            id: 4,
            icon: 'apple',
            title: 'Apple Music',
            url: 'https://music.apple.com/de/album/war-ep/1499376113?app=music',
          },
          {
            id: 5,
            icon: 'itunes',
            title: 'iTunes',
            url: 'https://music.apple.com/de/album/war-ep/1499376113?app=itunes',
          },
          {
            id: 6,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://amazon.de/dp/B084X8W6Q1?tag=songwhip0f-21',
          },
          {
            id: 7,
            icon: 'napster',
            title: 'Napster',
            url: 'https://de.napster.com/artist/haxan/album/war-444888155',
          },
          {
            id: 8,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/store/music/album?id=Bsjzakrbrog4kvzie6bmla7lyw4',
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
            icon: 'itunes',
            title: 'iTunes',
            url: 'https://music.apple.com/de/album/raw-ep/1477616157?app=itunes',
          },
          {
            id: 14,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://amazon.de/dp/B07W7VN6B5?tag=songwhip0f-21',
          },
          {
            id: 15,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/haxan/raw-396959642',
          },
          {
            id: 16,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/store/music/album?id=Bqajcn2hpbmpg5jqfbtqimv4tda',
          },
        ],
      };
    },
    methods: {
      toggle(id) {
        if (id === 'war') {
          this.showWarLinks = !this.showWarLinks;
        }
        if (id === 'raw') {
          this.showRawLinks = !this.showRawLinks;
        }
      },
    },
  };
</script>

<style scoped>
  .container {
    background-color: #171616;
    padding-top: 69px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/cover-artwork/haxan-war-hi-res.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;
  }
  h1 {
    font-size: 3rem;
    padding: 20px 0 20px 0;
  }

  /* SOCIAL MEDIA LINKS */

  .social-media-container {
    display: flex;
    width: 666px;
    margin: 30px 0 15px 0;
    justify-content: space-around;
  }
  .social-media-link {
    color: #fff;
  }
  .social-media-link:hover {
    color: #e4252c;
  }

  /* SPOTIFY AND MEDIA */

  h2 {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 50px 0 10px 0;
  }
  button {
    margin: 10px;
    padding: 2px;
    text-decoration: none;
    border: none;
    padding: 10px;
    font-size: 1rem;
    background-color: #e4252c;
    color: #fff;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
  }
  span {
    margin: 10px;
    font-size: 1.2rem;
  }

  /* MEDIA LINKS */

  .media-link {
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    padding: 5px;
    text-decoration: none;
    color: #fff;
  }
  a:hover {
    color: #e4252c;
  }

  .link-collection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .social-media-container {
      width: 333px;
    }
    .social-media-link {
      font-size: 1rem;
    }
    .youtube-player {
      width: 100%;
    }
    .artist-picture {
      width: 100%;
    }
    .spotify-player {
      width: 100%;
    }
    .link-collection {
      width: 100%;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .social-media-container {
      width: 444px;
    }
    .youtube-player {
      width: 75%;
    }
    .spotify-player {
      width: 75%;
    }
    .link-collection {
      width: 75%;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .spotify-player {
      width: 75%;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .youtube-player {
      width: 45%;
    }
    .spotify-player {
      width: 45%;
    }
    .link-collection {
      width: 666px;
    }
  }
</style>
