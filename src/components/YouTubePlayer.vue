<template>
  <iframe class="youtube-player" :src="url" frameborder="0" allowfullscreen scrolling="no"></iframe>
</template>

<script>
  export default {
    name: 'YouTubePlayer',
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
    .youtube-player {
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (min-width: 600px) {
    .youtube-player {
      width: 560px;
      height: 315px;
    }
  }
  @media only screen and (min-width: 992px) {
    .youtube-player {
      width: 840px;
      height: 473px;
    }
  }
</style>
