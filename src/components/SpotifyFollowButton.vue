<template>
  <div role="button" tabindex="0" aria-pressed="false">
    <iframe
      class="follow-button"
      :src="url"
      allowfullscreen
      scrolling="no"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
  export default {
    name: 'SpotifyFollowButton',
    props: {
      url: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .follow-button {
    margin-top: 30px;
    width: 840px;
    height: 56px;
  }
  @media only screen and (max-width: 600px) {
    .follow-button {
      width: 100%;
    }
  }
  @media only screen and (min-width: 600px) {
    .follow-button {
      width: 560px;
    }
  }
  @media only screen and (min-width: 768px) {
    .follow-button {
      width: 560px;
    }
  }
  @media only screen and (min-width: 992px) {
    .follow-button {
      width: 840px;
    }
  }
</style>
