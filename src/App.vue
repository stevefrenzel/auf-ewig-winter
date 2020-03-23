<template>
  <div id="app">
    <b-container fluid class="main-container">
      <!-- LOGO -->
      <!-- Possible to set breakpoint for width with a class name? -->
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
        <b-row class="text-center" align-h="center" align-v="center">
          <b-col
            v-for="item in navigation"
            :key="item"
            class="column-red"
            lg="2"
            ><a :href="item.link" rel="noopener noreferrer"
              ><h2 class="m-0">{{ item.title }}</h2></a
            ></b-col
          >
        </b-row>
      </nav>

      <!-- SOCIAL MEDIA -->
      <!-- Possible to set breakpoint for size with a class name? -->
      <section>
        <b-row class="text-center m-5" align-h="center" align-v="center">
          <b-col
            v-for="item in socialMedia"
            :key="item"
            class="column-green"
            cols="3"
            ><h3 class="m-0">
              <a :href="item.link" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', item.logo]" size="3x"
              /></a></h3
          ></b-col>
        </b-row>
      </section>

      <!-- FOOTER -->
      <!-- How to make this footer stick to bottom? -->
      <footer class="footer text-center">
        <b-row>
          <b-col>Coded with ♥️ by Steve Frenzel.</b-col>
        </b-row>
      </footer>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        navigation: [
          { title: 'ARTISTS', link: null },
          { title: 'SHOP', link: 'https://aufewigwinter.bandcamp.com/merch/' },
          {
            title: 'PODCAST',
            link:
              'https://open.spotify.com/show/6P3GrTJDW22sxod54f1kRs?si=iYtYzeeDTwu84A7A63TAXg'
          },
          { title: 'LEGAL NOTICE', link: null }
        ],
        socialMedia: [
          { logo: 'facebook', link: 'https://www.facebook.com/aufewigwinter' },
          {
            logo: 'instagram',
            link: 'https://www.instagram.com/aufewigwinter/'
          },
          { logo: 'bandcamp', link: 'https://aufewigwinter.bandcamp.com/' }
        ]
      };
    }
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed&display=swap');
  #app {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
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
    background-color: lightcoral;
  }
</style>
