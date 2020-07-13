<template>
  <div class="container">
    <video autoplay muted loop id="video">
      <source src="../assets/dust.mp4" type="video/mp4" />
    </video>

    <div class="logo-container">
      <figure>
        <img
          src="../assets/logos/aew-logo-horizontal.png"
          alt="AUF EWIG WINTER Logo Horizontal"
        />
      </figure>
    </div>

    <div class="social-media-container">
      <span v-for="item in socialMedia" :key="item.id">
        <a class="social-media-link" :href="item.url"
          ><font-awesome-icon
            class="social-media-icon"
            :icon="['fab', item.icon]"
            size="5x"
        /></a>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Start',
    data() {
      return {
        socialMedia: [
          {
            id: 1,
            url: 'http://instagram.com/aufewigwinter',
            icon: 'instagram',
          },
          { id: 2, url: 'http://facebook.com/aufewigwinter', icon: 'facebook' },
          {
            id: 3,
            url: 'https://www.youtube.com/channel/UC_PWRVbYIbazxwLfLJsLTFA',
            icon: 'youtube-square',
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
    .social-media-icon {
      font-size: 3rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .social-media-icon {
      font-size: 4rem;
    }
  }

  @media only screen and (min-width: 992px) {
    .social-media-icon {
      font-size: 5rem;
    }
  }
</style>
