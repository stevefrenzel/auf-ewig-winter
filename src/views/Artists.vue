<template>
  <main class="container">
    <h1>ARTISTS</h1>
    <section class="artist-gallery">
      <article class="image-container">
        <router-link :to="{ name: 'Haxan' }">
          <figure>
            <img
              src="../assets/artist-pictures/haxan-photo-min.jpg"
              alt="HAXAN Photo"
              loading="lazy"
              width="555px"
              height="555px"
            />
          </figure>
          <figcaption class="centered">HAXAN</figcaption>
        </router-link>
      </article>

      <article class="image-container">
        <router-link :to="{ name: 'Kora Winter' }">
          <figure>
            <img
              src="../assets/artist-pictures/kora-winter-photo-min.jpg"
              alt="Kora Winter Photo"
              loading="lazy"
              width="555px"
              height="555px"
            />
          </figure>
          <figcaption class="centered">KORA WINTER</figcaption>
        </router-link>
      </article>
    </section>
  </main>
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
  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: 0.3s ease;
  }
  a:hover {
    color: #e4252c;
  }
  .image-container {
    position: relative;
    text-align: center;
    color: white;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
  img {
    width: 222px;
    height: 222px;
    margin: 20px;
  }
  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 3rem;
    }
    a {
      font-size: 1.8rem;
    }
    img {
      width: 333px;
      height: 333px;
    }
  }
  @media only screen and (min-width: 768px) {
    a {
      font-size: 2rem;
    }
    img {
      width: 555px;
      height: 555px;
    }
  }
</style>
