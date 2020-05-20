<template>
  <div id="app">
    <Navigation />
  </div>
</template>

<script>
  import Navigation from '../src/components/Navigation';

  export default {
    components: { Navigation },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: black;
    color: white;
    font-family: 'Fira Sans Extra Condensed', sans-serif;
  }
</style>
