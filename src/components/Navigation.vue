<template>
  <nav>
    <b-row class="text-center" align-h="center" align-v="center">
      <b-col v-for="item in navigation" :key="item.title" sm="auto"
        ><transition name="fade"
          ><a
            @click="showModal(item.id)"
            :href="item.link"
            rel="noopener noreferrer"
            class="text-decoration-none"
            ><h2 class="m-0 px-3 nav-item">{{ item.title }}</h2></a
          >
        </transition></b-col
      >
    </b-row>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        navigation: [
          { id: 'artists', title: 'ARTISTS', link: null },
          {
            id: 'shop',
            title: 'SHOP',
            link: 'https://aufewigwinter.bandcamp.com/merch/'
          },
          {
            id: 'podcast',
            title: 'PODCAST',
            link:
              'https://open.spotify.com/show/6P3GrTJDW22sxod54f1kRs?si=iYtYzeeDTwu84A7A63TAXg'
          },
          { id: 'legalNotice', title: 'LEGAL NOTICE', link: null }
        ]
      };
    },
    methods: {
      showModal(id) {
        {
          this.$emit('showModal', id);
        }
      }
    }
  };
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 5s;
  }
  .nav-item {
    color: #e8402a;
  }
  .nav-item:hover {
    opacity: 0.5;
  }
  a:hover {
    cursor: pointer;
  }
</style>
