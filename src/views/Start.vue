<template>
  <div class="container">
    <video autoplay muted loop id="video">
      <source src="../assets/dust.mp4" type="video/mp4" />
    </video>
    <!-- <div class="logo-container">
      <figure>
        <img
          src="../assets/aew-logo-vertical.svg"
          alt="AUF EWIG WINTER Logo vertikal"
        />
      </figure>
    </div> -->
  </div>
</template>

<script>
  export default {
    name: 'Start',
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
  .logo-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  img {
    font-size: 3rem;
    z-index: 1;
    position: relative;
    color: red;
  }
</style>
