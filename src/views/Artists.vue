<template>
  <div class="container">
    <h1>ARTISTS</h1>
    <div class="artist-gallery">
      <router-link :to="{ name: 'Haxan' }" class="artist"
        ><figure>
          <img src="../assets/artist-pictures/haxan-photo.jpg" alt="HAXAN Photo" />
        </figure>
        <figcaption>HAXAN</figcaption></router-link
      >
      <router-link :to="{ name: 'Kora Winter' }" class="artist"
        ><figure>
          <img src="../assets/artist-pictures/kora-winter-photo.jpg" alt="Kora Winter Photo" />
        </figure>
        <figcaption>KORA WINTER</figcaption></router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Artists',
  };
</script>

<style scoped>
  .container {
    padding-top: 69px;
  }
  h1,
  h2 {
    text-align: center;
  }
  h1 {
    font-size: 2rem;
    padding: 20px 0 20px 0;
  }
  .artist-gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .artist {
    position: relative;
    text-align: center;
    color: white;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
  a:hover {
    color: #e4252c;
  }
  /* .centered {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
  img {
    width: 222px;
    margin: 20px;
  }

  /* MEDIA QUERIES */

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 3rem;
    }
    a {
      font-size: 1.8rem;
    }
    img {
      width: 333px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    a {
      font-size: 2rem;
    }
    img {
      width: 555px;
    }
  }
</style>
