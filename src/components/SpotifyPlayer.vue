<template>
  <section>
    <iframe
      class="spotify-player"
      :src="url"
      frameborder="0"
      allowtransparency="true"
    ></iframe>
  </section>
</template>

<script>
  export default {
    name: 'SpotifyPlayer',
    props: {
      url: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  @media only screen and (max-width: 600px) {
    .spotify-player {
      width: 95%;
      height: 210px;
    }
  }
  @media only screen and (min-width: 600px) {
    .spotify-player {
      width: 520px;
      height: 210px;
    }
  }
  @media only screen and (min-width: 992px) {
    .spotify-player {
      width: 800px;
      height: 210px;
    }
  }
</style>
