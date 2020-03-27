<template>
  <b-modal
    v-model="isVisible"
    centered
    hide-header
    hide-footer
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
  >
    <b-container>
      <b-row class="text-center">
        <b-col class="my-4">
          <a href="https://haxan030.bandcamp.com/" alt="HAXAN Bandcamp">
            <img src="../assets/haxan-logo.png" alt="" width="250" /> </a
        ></b-col>
        <b-col class="my-4">
          <a href="https://korawinter.bandcamp.com/" alt="Kora Winter Bandcamp"
            ><img src="../assets/kora-winter-logo.png" alt="" width="250"/></a
        ></b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
  export default {
    name: 'ModalArtists',
    props: ['value'],
    computed: {
      isVisible: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    data() {
      return {
        bodyBgVariant: 'dark',
        bodyTextVariant: 'white'
      };
    }
  };
</script>

<style scoped>
  .test {
    width: 5%;
  }
</style>
