<template>
  <div class="container-releases">
    <h2>{{ heading }}</h2>
    <iframe
      class="spotify-player"
      :src="spotifyUrl"
      frameborder="0"
      allowtransparency="true"
    ></iframe>
    <template>
      <div class="link-collection">
        <a
          class="media-link"
          :href="item.url"
          rel="noopener"
          v-for="item in linkCollection"
          :key="item.id"
        >
          <font-awesome-icon class="media-icon" :icon="['fab', item.icon]" size="1x" />
          {{ item.title }}</a
        >
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SpotifyAndMedia',
    props: {
      heading: {
        type: String,
        required: true,
      },
      spotifyUrl: {
        type: String,
        required: true,
      },
      linkCollection: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .container-releases {
    text-align: center;
    border: 1px solid rgb(60, 60, 60);
    margin-top: 30px;
    padding: 20px;
    border-radius: 5px;
  }
  h2 {
    font-size: 2rem;
    font-weight: 100;
    margin: 0 0 10px 0;
    letter-spacing: 1px;
  }
  .media-icon {
    margin-right: 5px;
  }
  .media-link {
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    font-size: 1.2rem;
    padding: 10px;
    transition: 0.2s ease;
  }
  .media-link:hover {
    color: red;
    border-color: red;
  }
  .button-icon {
    margin-left: 10px;
  }
  a {
    padding: 5px;
    text-decoration: none;
    color: #fff;
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
    .container-releases {
      border: none;
      margin-top: 30px;
    }
    h2 {
      font-size: 1.5rem;
    }
    a {
      padding: 2px;
      font-size: 1rem;
    }
    .spotify-player {
      width: 100%;
      height: 210px;
    }
    .link-collection {
      width: 100%;
    }
    .media-link {
      width: 40%;
      font-size: 0.8rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }
    .spotify-player {
      width: 560px;
      height: 210px;
    }
    .link-collection {
      width: 560px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .spotify-player {
      width: 840px;
      height: 210px;
    }
    .link-collection {
      width: 840px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
</style>
