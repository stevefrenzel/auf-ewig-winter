<template>
  <b-row class="text-center" align-h="center">
    <b-col class="my-5" xs="12" md="8">
      <figure class="m-0">
        <img fluid src="../assets/logo.png" alt="AUF EWIG WINTER LOGO" />
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
