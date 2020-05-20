# Website for german record label AUF EWIG WINTER

###### Built with [Vue.js](https://vuejs.org/) and [Bootstrap](https://getbootstrap.com/).

## 1. Task 📌

Build a responsive SPA (Single Page Application) with a video background, logo, navigation and social media icons.

## 2. Challenges ⚠️

This project is in itself very simple and I had already programmed it before without using [Vue.js](https://vuejs.org/) and [Bootstrap](https://getbootstrap.com/), but since I find both technologies very exciting and always looking for a challenge, I decided to do it again with these two technologies.

Since I already had a finished structure and CSS, I only had to split the elements into components in the beginning. To make the code as [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as possible, the displayed data comes from a data object, through which I iterate using Vue.js:

###### `Navigation.vue`:

```javascript
data() {
  return {
    navigation: [
      { id: 'artists', title: 'ARTISTS', link: null },
      { id: 'shop', title: 'SHOP', link: 'https://aufewigwinter.bandcamp.com/merc' },
      { id: 'podcast', title: 'PODCAST', link: 'https://open.spotify.com/show/6P3GrTJDW22sxod54f1kRs?si=iYtYzeeDTwu84A7A63TAXg' },
      { id: 'legalNotice', title: 'LEGAL NOTICE', link: null }
    ]
  };
}
```

Here I came across my first big challenge, because I had to specify that the respective modal only opens when either "ARTISTS" or "LEGAL NOTICE" is clicked. This is done by giving the click handler the id object as argument, which is sent to the parent component:

###### Emitting the data:

```javascript
methods: {
  showModal(id) {
    { this.$emit('showModal', id); }
  }
}
```

## 3. Conclusion 🤔
