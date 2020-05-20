<template>
  <div>
    <h2>{{ heading }}</h2>
    <iframe
      class="spotify-player"
      :src="spotifyUrl"
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
      toggleButton: {
        type: Function,
        required: true,
      },
    },
  };
</script>

<style scoped>
  h2 {
    font-size: 1.5rem;
    font-weight: 100;
    margin: 30px 0 10px 0;
  }

  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .spotify-player {
      width: 100%;
    }
    .link-collection {
      width: 100%;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
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
      width: 50%;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .spotify-player {
      width: 30%;
    }
    .link-collection {
      width: 666px;
    }
  }
</style>
