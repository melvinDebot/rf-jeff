<template>
  <div class="home">
    <h1>Home</h1>
    <PhotoPage />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoPage from '../template/PhotoPage.vue'

export default {
  name: 'Home',
  components: {
    PhotoPage,
    
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  h1{
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>


<style scoped>

</style>
