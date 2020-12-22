<template>
  <main class="container">
    <video autoplay muted loop id="video">
      <source src="../assets/dust.mp4" type="video/mp4" />
    </video>

    <section class="logo-container">
      <figure>
        <img
          src="../assets/logos/aew-logo-horizontal.png"
          alt="AUF EWIG WINTER Logo Horizontal"
          loading="lazy"
        />
      </figure>
    </section>

    <section class="social-media-container">
      <span v-for="item in socialMedia" :key="item.id">
        <a
          class="social-media-link"
          :href="item.url"
          rel="noopener noreferrer"
          :aria-label="item.description"
          ><font-awesome-icon
            class="social-media-icon"
            :icon="[item.iconType, item.icon]"
            :size="item.iconSize"
        /></a>
      </span>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Start',
    data() {
      return {
        socialMedia: [
          {
            id: 1,
            url: 'https://aufewigwinter.bandcamp.com/',
            icon: 'shopping-cart',
            iconType: 'fas',
            iconSize: '2x',
            description: 'AUF EWIG WINTER Shop',
          },
          {
            id: 2,
            url: 'http://instagram.com/aufewigwinter',
            icon: 'instagram',
            iconType: 'fab',
            iconSize: '3x',
            description: 'AUF EWIG WINTER Instagram',
          },
          {
            id: 3,
            url: 'http://facebook.com/aufewigwinter',
            icon: 'facebook',
            iconType: 'fab',
            iconSize: '3x',
            description: 'AUF EWIG WINTER Facebook',
          },
          {
            id: 4,
            url: 'https://www.youtube.com/channel/UC_PWRVbYIbazxwLfLJsLTFA',
            icon: 'youtube-square',
            iconType: 'fab',
            iconSize: '3x',
            description: 'AUF EWIG WINTER YouTube',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  #video {
    z-index: -10;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  .container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .social-media-container {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  a {
    color: #e4252c;
    transition: 0.3s ease;
  }
  a:hover {
    color: #fff;
  }
  source {
    width: 100px;
    height: 100px;
  }
  figure img {
    width: 100%;
    height: auto;
  }

  /* MEDIA QUERIES */

  @media only screen and (max-width: 600px) {
    video {
      display: none;
    }
    figure img {
      width: 75%;
    }
    .social-media-container {
      width: 75%;
      margin-top: 20px;
    }
    .social-media-icon {
      font-size: 2rem;
    }
  }

  @media only screen and (min-width: 600px) {
    figure img {
      width: 75%;
    }
  }
</style>
