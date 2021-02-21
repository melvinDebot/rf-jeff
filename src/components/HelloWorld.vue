<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import DescPhoto from "../template/DescPhoto.vue";
export default {
  name: "HelloWorld",
  components: {
    DescPhoto,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: auto;
  border: 1px solid red;
  display: inline-block;
  justify-content: center;
}
</style>
