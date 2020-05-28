<template>
  <div class="container">
    <!-- <video autoplay muted loop id="video">
      <source src="../assets/dust.mp4" type="video/mp4" />
    </video> -->
    <div class="logo-container">
      <!-- Use 100% wide / height auto <div> with background image here -->
      <figure>
        <img
          id="horizontal-logo"
          src="../assets/logos/aew-logo-horizontal.png"
          alt="AUF EWIG WINTER Logo horizontal"
        />
      </figure>
    </div>
    <div class="social-media-container">
      <span v-for="item in socialMedia" :key="item.id">
        <a class="social-media-link" :href="item.url"
          ><font-awesome-icon class="social-media-icon" :icon="['fab', item.icon]" size="5x"
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
          { id: 1, url: 'http://instagram.com/aufewigwinter', icon: 'instagram' },
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
  img {
    width: 100%;
    height: auto;
  }

  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    /* .container {
      background-color: lightslategray;
    } */
    #vertical-logo {
      width: 75%;
    }
    .social-media-container {
      width: 75%;
      margin-top: 20px;
    }
    .social-media-icon {
      font-size: 3rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    /* .container {
      background-color: lightpink;
    } */
    #vertical-logo {
      width: 30%;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    /* .container {
      background-color: lightseagreen;
    } */
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    /* .container {
      background-color: yellowgreen;
    } */
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    /* .container {
      background-color: orangered;
    } */
  }
</style>
