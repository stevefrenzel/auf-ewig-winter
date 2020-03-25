<template>
  <transition name="fade">
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
  </transition>
</template>

<script>
  export default {
    name: 'SocialMedia',
    data() {
      return {
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

<style scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 7s;
  }
  .icon {
    color: #e8402a;
  }
  .icon:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 600px) {
    .icon {
      font-size: 2.5rem;
    }
  }
</style>
