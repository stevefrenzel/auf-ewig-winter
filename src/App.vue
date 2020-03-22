<template>
  <div id="app">
    <b-container fluid class="main-container">
      <!-- LOGO -->
      <b-row class="text-center" align-h="center">
        <b-col class="column-green m-5" xs="12" md="8">
          <figure>
            <img
              class="w-50"
              fluid
              src="./assets/logo.png"
              alt="AUF EWIG WINTER LOGO"
            />
          </figure>
        </b-col>
      </b-row>
      <!-- NAVIGATION -->
      <nav>
        <b-row class="text-center m-5" align-h="center">
          <b-col class="column-red" lg="2"><h2>ARTIST</h2></b-col>
          <b-col class="column-red" lg="2"><h2>SHOP</h2></b-col>
          <b-col class="column-red" lg="2"><h2>PODCAST</h2></b-col>
          <b-col class="column-red" lg="2"><h2>LEGAL NOTICE</h2></b-col>
        </b-row>
      </nav>
      <!-- SOCIAL MEDIA -->
      <section>
        <b-row class="text-center m-5" align-h="center">
          <b-col class="column-green" sm="12" lg="2"><h3>FACEBOOK</h3></b-col>
          <b-col class="column-green" sm="12" lg="2"><h3>INSTAGRAM</h3></b-col>
          <b-col class="column-green" sm="12" lg="2"><h3>BANDCAMP</h3></b-col>
        </b-row>
      </section>
      <!-- FOOTER -->
      <footer>
        <b-row class="footer text-center w-100 p-3">
          <b-col>Coded with ♥️ by Steve Frenzel.</b-col>
        </b-row>
      </footer>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  #app {
    height: 100vh;
    background-color: lightblue;
  }
  .column-red {
    background-color: lightcoral;
    border: 1px solid black;
  }
  .column-green {
    background-color: lightgreen;
    border: 1px solid black;
  }
  .footer {
    position: absolute;
    bottom: 0;
    /* width: 100%; */
    background-color: lightcoral;
  }
</style>
