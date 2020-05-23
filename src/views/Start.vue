<template>
  <div class="container">
    <!-- <video autoplay muted loop id="video">
      <source src="../assets/dust.mp4" type="video/mp4" />
    </video> -->
    <div class="logo-container">
      <figure>
        <img src="../assets/logos/aew-logo-horizontal.svg" alt="AUF EWIG WINTER Logo Horizontal" />
      </figure>
    </div>
    <div class="social-media-container">
      <span v-for="item in socialMedia" :key="item.id">
        <a :href="item.url" class="social-media-link"
          ><font-awesome-icon class="icon" :icon="['fab', item.icon]" size="5x"
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
  }
  .social-media-container {
    background-color: #000;
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
    height: 300px;
    border: 1px solid black;
  }
  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .container {
      background-color: lightslategray;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .container {
      background-color: lightpink;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .container {
      background-color: lightseagreen;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .container {
      background-color: yellowgreen;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .container {
      background-color: orangered;
    }
  }
</style>
