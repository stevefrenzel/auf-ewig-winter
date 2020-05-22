<template>
  <div>
    <nav id="nav">
      <router-link :to="{ name: 'Start' }" class="item">AUF EWIG WINTER</router-link>
      <router-link :to="{ name: 'Artists' }" class="item">ARTISTS</router-link>
      <a
        href="https://aufewigwinter.bandcamp.com/merch/auf-ewig-winter-embroided-t-shirt"
        rel="noopener"
        class="item"
        >SHOP</a
      >
      <a
        href="https://open.spotify.com/show/6P3GrTJDW22sxod54f1kRs?si=m9fyXMVWQUmNlWD9rwmHjQ"
        rel="noopener"
        class="item"
        >PODCAST</a
      >
      <router-link :to="{ name: 'Legal Notice' }" class="item">LEGAL NOTICE</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
  };
</script>

<style scoped>
  #nav {
    z-index: 2;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: top 0.3s;
  }

  #nav a {
    color: #e4252c;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: #fff;
  }

  #nav .item:hover {
    color: #fff;
  }

  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    #nav {
      height: 40px;
    }
    .item {
      font-size: 1rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    #nav {
      height: 40px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    #nav {
      height: 50px;
    }
    .item {
      font-size: 1.5rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    /* #nav {
      background-color: orangered;
    } */
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    /* #nav {
      background-color: lightsalmon;
    } */
  }
</style>
