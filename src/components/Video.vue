<template>
  <video autoplay muted loop id="video">
    <source src="../assets/dust.mp4" type="video/mp4" />
  </video>
</template>

<script>
  export default {
    name: 'Video'
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
</style>
