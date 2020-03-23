<template>
  <div id="app">
    <video autoplay muted loop id="video">
      <source src="./assets/dust.mp4" type="video/mp4" />
    </video>
    <b-container fluid id="main-container">
      <!-- LOGO -->
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
            ><a
              :href="item.link"
              rel="noopener noreferrer"
              class="text-decoration-none"
              ><h2 class="m-0 px-3 nav-item">{{ item.title }}</h2></a
            ></b-col
          >
        </b-row>
      </nav>

      <!-- SOCIAL MEDIA -->
      <section>
        <b-row class="my-5" align-h="center">
          <b-col
            v-for="item in socialMedia"
            :key="item.title"
            cols="3"
            lg="2"
            class="text-center"
            ><h3 class="m-0 ">
              <a :href="item.link" rel="noopener noreferrer">
                <font-awesome-icon
                  class="icon"
                  :icon="['fab', item.logo]"
                  size="3x"
              /></a></h3
          ></b-col>
        </b-row>
      </section>
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
    overflow: scroll;
    background-color: #000;
    display: flex;
    align-items: center;
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
  .icon:hover,
  .nav-item:hover {
    color: #fff;
  }
  /* .column-red {
    background-color: lightcoral;
    border: 1px solid black;
  }
  .column-green {
    background-color: lightgreen;
    border: 1px solid black;
  } */

  /* MEDIA QUERIES: */
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    img {
      width: 75%;
    }
    .icon {
      font-size: 2.5rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    img {
      width: 50%;
    }
  }
</style>
