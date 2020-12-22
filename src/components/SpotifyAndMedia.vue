<template>
  <section class="container-releases">
    <h2>{{ heading }}</h2>

    <Loader class="loader" />

    <SpotifyPlayer :url="spotifyUrl" />

    <div class="link-collection">
      <a
        class="media-link"
        :href="item.url"
        rel="noopener noreferrer"
        v-for="item in linkCollection"
        :key="item.id"
      >
        <font-awesome-icon
          class="media-icon"
          :icon="['fab', item.icon]"
          size="1x"
        />
        {{ item.title }}</a
      >
    </div>
  </section>
</template>

<script>
  const SpotifyPlayer = () =>
    import(
      /* webpackChunkName: "Spotify Player" */ '../components/SpotifyPlayer'
    );
  const Loader = () =>
    import(/* webpackChunkName: "Loader" */ '../components/Loader');

  export default {
    name: 'SpotifyAndMedia',
    components: { Loader, SpotifyPlayer },
    props: {
      heading: {
        type: String,
        required: true,
      },
      spotifyUrl: {
        type: String,
        required: true,
      },
      linkCollection: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .container-releases {
    text-align: center;
    border: 1px solid rgb(60, 60, 60);
    margin-top: 30px;
    border-radius: 5px;
  }
  h2 {
    font-size: 2rem;
    font-weight: 100;
    margin: 10px 0 10px 0;
    letter-spacing: 1px;
  }
  .media-icon {
    margin-right: 5px;
  }
  .media-link {
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    font-size: 1.2rem;
    padding: 10px;
    transition: 0.2s ease;
  }
  .media-link:hover {
    color: red;
    border-color: red;
  }
  .button-icon {
    margin-left: 10px;
  }
  a {
    padding: 5px;
    text-decoration: none;
    color: #fff;
  }

  .link-collection {
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .loader {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .container-releases {
      border: none;
      margin-top: 30px;
      padding: 0;
    }
    h2 {
      font-size: 1.5rem;
    }
    a {
      padding: 2px;
      font-size: 1rem;
    }
    .link-collection {
      width: 100%;
    }
    .media-link {
      width: 40%;
      font-size: 0.8rem;
    }
  }
  @media only screen and (min-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }
    .link-collection {
      width: 560px;
    }
  }
  @media only screen and (min-width: 992px) {
    .link-collection {
      width: 840px;
    }
  }
</style>
