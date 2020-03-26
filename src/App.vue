<template>
  <div id="app">
    <video autoplay muted loop id="video">
      <source src="./assets/dust.mp4" type="video/mp4" />
    </video>
    <b-container fluid id="main-container">
      <Logo />
      <Navigation
        @showArtistModal="showArtistModal"
        @showLegalNoticeModal="showLegalNoticeModal"
        @showModal="showModal"
      />
      <SocialMedia />
      <!-- MODALS -->
      <ModalArtists v-model="artistModal" />
      <ModalLegalNotice v-model="legalNoticeModal" />
    </b-container>
  </div>
</template>

<script>
  import Logo from './components/Logo';
  import Navigation from './components/Navigation';
  import SocialMedia from './components/SocialMedia';
  import ModalArtists from './components/ModalArtists';
  import ModalLegalNotice from './components/ModalLegalNotice';

  export default {
    name: 'App',
    components: {
      Logo,
      Navigation,
      SocialMedia,
      ModalArtists,
      ModalLegalNotice
    },
    data() {
      return {
        artistModal: false,
        legalNoticeModal: false
      };
    },
    methods: {
      showArtistModal() {
        this.artistModal = true;
      },
      showLegalNoticeModal() {
        this.legalNoticeModal = true;
      },
      // This isn't working (yet):
      showModal() {
        if (this.artistModal === false) {
          this.artistModal = true;
        }
        if (this.legalNoticeModal === false) {
          this.legalNoticeModal = true;
        }
      }
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
</style>
