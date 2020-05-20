<template>
  <div class="container">
    <h1>KORA WINTER</h1>
    <!-- YOUTUBE PLAYER -->
    <iframe
      class="youtube-player"
      height="315"
      src="https://www.youtube-nocookie.com/embed/uj_-J6dc9Po"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <!-- BITTER RELEASE -->
    <h2>"BITTER"</h2>
    <iframe
      class="spotify-player"
      src="https://open.spotify.com/embed/album/0rlhNo56LgYcBrHTvBrE4y"
      height="330"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <button v-on:click="toggle('bitter')">
      {{ showBitterLinks ? 'SHOW LESS' : 'SHOW MORE' }}
    </button>
    <template v-if="showBitterLinks">
      <div class="link-collection">
        <span v-for="item in linksBitter" :key="item.id" class="media-link">
          <a :href="item.url" rel="noopener">
            <font-awesome-icon :icon="['fab', item.icon]" size="1x" />
            {{ item.title }}</a
          >
        </span>
      </div>
    </template>
    <!-- WELK RELEASE -->
    <h2>"Welk"</h2>
    <iframe
      class="spotify-player"
      src="https://open.spotify.com/embed/album/1aj7iAfh1c1io39LPNi3t1"
      height="210"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <button v-on:click="toggle('welk')">
      {{ showWelkLinks ? 'SHOW LESS' : 'SHOW MORE' }}
    </button>
    <template v-if="showWelkLinks">
      <div class="link-collection">
        <span v-for="item in linksWelk" :key="item.id" class="media-link">
          <a :href="item.url" rel="noopener">
            <font-awesome-icon :icon="['fab', item.icon]" size="1x" />
            {{ item.title }}</a
          >
        </span>
      </div>
    </template>
    <!-- BLUEHT RELEASE -->
    <h2>"Blüht"</h2>
    <iframe
      class="spotify-player"
      src="https://open.spotify.com/embed/album/5rXw9rHkAbbsjegFTu5PuD"
      height="270"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <button v-on:click="toggle('blueht')">
      {{ showBluehtLinks ? 'SHOW LESS' : 'SHOW MORE' }}
    </button>
    <template v-if="showBluehtLinks">
      <div class="link-collection">
        <span v-for="item in linksBlueht" :key="item.id" class="media-link">
          <a :href="item.url" rel="noopener">
            <font-awesome-icon :icon="['fab', item.icon]" size="1x" />
            {{ item.title }}</a
          >
        </span>
      </div>
    </template>
    <!-- SOCIAL MEDIA LINKS -->
    <div class="social-media-container">
      <span v-for="item in socialMediaLinks" :key="item.id">
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
    name: 'KoraWinter',
    methods: {
      toggle(id) {
        if (id === 'bitter') {
          this.showBitterLinks = !this.showBitterLinks;
        }
        if (id === 'welk') {
          this.showWelkLinks = !this.showWelkLinks;
        }
        if (id === 'blueht') {
          this.showBluehtLinks = !this.showBluehtLinks;
        }
      },
    },
    data() {
      return {
        showBitterLinks: false,
        showWelkLinks: false,
        showBluehtLinks: false,
        socialMediaLinks: [
          { id: 'instagram-link', url: 'https://www.instagram.com/korawinter/', icon: 'instagram' },
          { id: 'facebook-link', url: 'https://www.facebook.com/korawinterband', icon: 'facebook' },
          {
            id: 'youtube-link',
            url: 'https://www.youtube.com/channel/UCBP_NZMedZzJpvR9LD2aaiw',
            icon: 'youtube-square',
          },
        ],
        linksBitter: [
          {
            id: 1,
            icon: 'spotify',
            title: 'Spotify',
            url: 'https://open.spotify.com/album/15wCHlSd6QDwpJr6kJpvhT',
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
            icon: 'itunes',
            title: 'iTunes',
            url: 'https://music.apple.com/de/album/bitter/1481042976?app=itunes',
          },
          {
            id: 6,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://amazon.de/dp/B07VMDFZXT?tag=songwhip0f-21',
          },
          {
            id: 7,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/kora-winter/bitter-single',
          },
          {
            id: 8,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/store/music/album?id=Bc2tjmecminjbj23vxh4pn5z77y',
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
            url: 'https://music.apple.com/de/album/welk-ep/1224158236?app=music',
          },
          {
            id: 13,
            icon: 'itunes',
            title: 'iTunes',
            url: 'https://music.apple.com/de/album/welk-ep/1224158236?app=itunes',
          },
          {
            id: 14,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://amazon.de/dp/B06Y3LNQP1?tag=songwhip0f-21',
          },
          {
            id: 15,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/store/music/album?id=By4bq4ouh5fule7k2wc2bnceuvm',
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
            url: 'https://music.apple.com/de/album/bl%C3%BCht/947376528?app=music',
          },
          {
            id: 20,
            icon: 'itunes',
            title: 'iTunes',
            url: 'https://music.apple.com/de/album/bl%C3%BCht/947376528?app=itunes',
          },
          {
            id: 21,
            icon: 'amazon',
            title: 'Amazon Music',
            url: 'https://amazon.de/dp/B00QH3PR5M?tag=songwhip0f-21',
          },
          {
            id: 22,
            icon: 'napster',
            title: 'Napster',
            url: 'https://napster.com/kora-winter/bluht',
          },
          {
            id: 23,
            icon: 'google-play',
            title: 'Google Play',
            url: 'https://play.google.com/store/music/album?id=Bvvt6tvo5zaopeaurftdycnahey',
          },
        ],
      };
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
    background-image: url('../assets/cover-artwork/kora-winter-deine-freunde-hi-res.png');
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

  h2 {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 50px 0 10px 0;
  }
  button {
    margin: 15px 0 15px 0;
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
