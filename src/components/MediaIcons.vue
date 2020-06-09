<template>
  <div class="bottom-container">
    <span v-for="item in mediaLinks" :key="item.id">
      <a class="bottom-link" :href="item.url"
        ><font-awesome-icon
          class="bottom-icon"
          :icon="[item.iconType, item.icon]"
          :size="item.iconSize"
      /></a>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'MediaIcons',
    props: {
      url: {
        type: String,
        required: true,
      },
      iconType: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      iconSize: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .bottom-container {
    display: flex;
    width: 666px;
    margin: 30px 0 15px 0;
    justify-content: space-around;
    align-items: center;
  }
  .bottom-link {
    color: #fff;
    transition: 0.2s ease;
  }
  .bottom-link:hover {
    color: #e4252c;
  }

  @media only screen and (max-width: 600px) {
    .bottom-container {
      width: 100%;
    }
    .bottom-link {
      font-size: 1rem;
    }
    .bottom-icon {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .bottom-container {
      width: 560px;
    }
  }
</style>
