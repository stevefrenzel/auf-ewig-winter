<template>
  <div id="app">
    <video autoplay muted loop id="video">
      <source src="./assets/dust.mp4" type="video/mp4" />
    </video>
    <b-container fluid id="main-container">
      <Logo />
      <Navigation />
      <SocialMedia />
      <!-- MODALS -->
      <ModalArtists id="modal-artists" />
      <ModalLegalNotice id="modal-legal-notice" />
    </b-container>
  </div>
</template>

<script>
  // TO DO:
  // How to create event handler that opens respective modal?

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
