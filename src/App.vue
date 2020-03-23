<template>
  <div id="app">
    <video autoplay muted loop id="video">
      <source src="./assets/dust.mp4" type="video/mp4" />
    </video>
    <b-container fluid id="main-container">
      <!-- LOGO -->
      <!-- Possible to set breakpoint for width with a class name? -->
      <b-row class="text-center" align-h="center">
        <b-col class="my-5" xs="12" md="8">
          <figure class="m-0">
            <img fluid src="./assets/logo.png" alt="AUF EWIG WINTER LOGO" />
          </figure>
        </b-col>
      </b-row>

      <!-- NAVIGATION -->
      <nav>
        <b-row class="text-center" align-h="center" align-v="center">
          <b-col v-for="item in navigation" :key="item.title" sm="auto"
            ><a :href="item.link" rel="noopener noreferrer"
              ><h2 class="m-0 px-3 nav-item">{{ item.title }}</h2></a
            ></b-col
          >
        </b-row>
      </nav>

      <!-- SOCIAL MEDIA -->
      <!-- Possible to set breakpoint for size with a class name? -->
      <section>
        <b-row class="mt-5 text-center" align-h="center">
          <b-col v-for="item in socialMedia" :key="item.title" cols="2"
            ><h3 class="m-0">
              <a :href="item.link" rel="noopener noreferrer">
                <font-awesome-icon
                  class="icon"
                  :icon="['fab', item.logo]"
                  size="3x"
              /></a></h3
          ></b-col>
        </b-row>
      </section>

      <!-- FOOTER -->
      <!-- How to make this footer stick to bottom? -->
      <!-- <footer class="footer text-center">
        <b-row>
          <b-col>Coded with ♥️ by Steve Frenzel.</b-col>
        </b-row>
      </footer> -->
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

  /* GENERAL: */
  #app {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    height: 100vh;
    overflow: scroll;
    background-color: lightblue;
  }
  #video {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
  .nav-item,
  .icon {
    color: #e8402a;
  }
  .column-red {
    background-color: lightcoral;
    border: 1px solid black;
  }
  .column-green {
    background-color: lightgreen;
    border: 1px solid black;
  }
  /* NAVIGATION: */

  /* SOCIAL MEDIA: */

  /* FOOTER: */
  .footer {
    background-color: lightcoral;
  }

  /* MEDIA QUERIES: */
  @media only screen and (max-width: 600px) {
    img {
      width: 75%;
    }
    .icon {
      font-size: 3rem;
    }
  }
  @media only screen and (min-width: 600px) {
    img {
      width: 50%;
    }
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 50%;
    }
  }
</style>
