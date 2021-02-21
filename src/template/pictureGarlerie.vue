<template>
  <div
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="picture-warpper"
  >
    <img :src="src" :alt="alt" />
    <div class="overlay" :class="{ active: hover }">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureMainGalerie",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    src: {},
    alt: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.picture-warpper {
  display: table;
  display: inline;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
}

.overlay {
  opacity: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.486);
  width: 100%;
  height: 100%;
  top: 0;
  transition: 0.2s;
  &.active {
    opacity: 1;
  }
}

h3 {
  position: relative;
  bottom: 50px;
  text-align: center;
  color: white;
  font-size: 38px;
  position: absolute;
  display: block;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  height: 30px;
}
</style>
