<template>
  <transition name="fade">
    <b-row class="text-center" align-h="center">
      <b-col class="mb-5" xs="12" md="8">
        <figure class="m-0">
          <img fluid src="../assets/logo.png" alt="AUF EWIG WINTER LOGO" />
        </figure>
      </b-col>
    </b-row>
  </transition>
</template>

<script>
  export default {
    name: 'Logo'
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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
