<template>
  <div id="app">
    <b-container fluid id="main-container">
      <Video />
      <Logo />
      <Navigation @showModal="showModal" />
      <SocialMedia />
      <ModalArtists v-model="artistModal" />
      <ModalLegalNotice v-model="legalNoticeModal" />
    </b-container>
  </div>
</template>

<script>
  import Video from './components/Video';
  import Logo from './components/Logo';
  import Navigation from './components/Navigation';
  import SocialMedia from './components/SocialMedia';
  import ModalArtists from './components/ModalArtists';
  import ModalLegalNotice from './components/ModalLegalNotice';

  export default {
    name: 'App',
    components: {
      Video,
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
      showModal(id) {
        this.artistModal = id === 'artists' ? true : false;
        this.legalNoticeModal = id === 'legalNotice' ? true : false;
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
</style>
