<template>
  <b-modal
    v-model="isVisible"
    centered
    hide-header
    hide-footer
    :body-bg-variant="bodyBgVariant"
    :body-text-variant="bodyTextVariant"
  >
    <img src="../assets/kora-winter-logo.png" alt="" width="250" />
    <img
      src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80"
      alt=""
      width="250"
    />
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

<style scoped></style>
