<template>
  <div>
    <nav class="navbar">
      <router-link :to="{ name: 'Start' }"
        ><figure>
          <img
            id="horizontal-logo"
            src="../assets/logos/aew-logo-horizontal.png"
            alt="AUF EWIG WINTER Logo horizontal"
          /></figure
      ></router-link>

      <div class="navbar-links" v-bind:class="{ active: isActive }">
        <ul>
          <li @click="toggleClass()">
            <router-link :to="{ name: 'Artists' }">ARTISTS</router-link>
          </li>
          <li>
            <a :href="shopLink" rel="noopener">SHOP</a>
          </li>
          <li>
            <a :href="podcastLink" rel="noopener">PODCAST</a>
          </li>
          <li @click="toggleClass()">
            <router-link :to="{ name: 'Legal Notice' }">LEGAL NOTICE</router-link>
          </li>
        </ul>
      </div>
      <font-awesome-icon
        v-if="!isActive"
        @click="toggleClass()"
        v-bind:class="{ active: isActive }"
        class="toggle-button"
        :icon="['fas', 'bars']"
        size="1x"
      />
      <font-awesome-icon
        v-if="isActive"
        @click="toggleClass()"
        v-bind:class="{ active: isActive }"
        class="toggle-button"
        :icon="['fas', 'times']"
        size="1x"
      />
    </nav>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {
        isActive: false,
        shopLink: 'https://aufewigwinter.bandcamp.com/merch/',
        podcastLink:
          'https://open.spotify.com/show/6P3GrTJDW22sxod54f1kRs?si=m9fyXMVWQUmNlWD9rwmHjQ',
      };
    },
    methods: {
      toggleClass: function() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .navbar {
    z-index: 666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    position: fixed;
    width: 100%;
  }

  #horizontal-logo {
    margin: 0.5rem 0 0 0.5rem;
    width: 200px;
  }

  .navbar-links ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  .navbar-links li {
    list-style: none;
    transition: 0.3s ease;
  }
  .navbar-links li:hover {
    background-color: #333;
  }

  .navbar-links li a {
    color: #e4252c;
    text-decoration: none;
    display: block;
    padding: 1rem;
  }

  .internal-link {
    padding: 1rem;
  }

  .navbar a.router-link-exact-active {
    color: #fff;
  }

  .toggle-button {
    color: #e4252c;
    position: absolute;
    top: 1.4rem;
    right: 1rem;
    display: none;
    transition: 0.3s ease;
  }
  .toggle-button:hover {
    color: #fff;
  }

  /* MEDIA QUERIES */

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .toggle-button {
      display: flex;
    }
    .navbar-links {
      width: 100%;
      display: none;
    }
    .navbar {
      height: 60px;
      flex-direction: column;
      align-items: flex-start;
    }
    .navbar-links ul {
      background-color: rgba(0, 0, 0, 0.8);
      width: 100%;
      flex-direction: column;
    }
    .navbar-links li {
      text-align: center;
    }
    .navbar-links.active {
      display: flex;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .navbar-links li {
      font-size: 0.8rem;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .navbar-links li {
      font-size: 1.2rem;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .navbar-links li {
      margin-left: 20px;
      font-size: 1.5rem;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .navbar-links li {
      margin-left: 40px;
    }
  }
</style>
