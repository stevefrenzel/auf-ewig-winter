<template>
  <b-row class="text-center" align-h="center">
    <b-col class="mb-5" xs="12" md="8">
      <figure class="m-0">
        <transition name="fade">
          <img fluid src="../assets/logo.png" alt="AUF EWIG WINTER LOGO" />
        </transition>
      </figure>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    name: 'Logo'
  };
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 3s;
  }
  @media only screen and (max-width: 600px) {
    img {
      width: 75%;
    }
  }
  @media only screen and (min-width: 600px) {
    img {
      width: 50%;
    }
  }
</style>
