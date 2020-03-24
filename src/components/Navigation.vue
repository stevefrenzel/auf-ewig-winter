<template>
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
</template>

<script>
  export default {
    name: 'Navigation',
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
        ]
      };
    }
  };
</script>

<style scoped>
  .nav-item {
    color: #e8402a;
  }
  .nav-item:hover {
    opacity: 0.5;
  }
</style>
