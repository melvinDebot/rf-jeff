<template>
  <div class="photos">
    <h1>{{ currentImage.title }}</h1>
    <img :src="currentImage.imgOne" alt=""/>
    <img :src="currentImage.imgTwo" alt=""/>
    <router-link :to="currentImage.next">
      <h3>YOOO</h3>
    </router-link>
  </div>
</template>

<script>
import descPhoto from '@/utils/descPhoto.json'
export default {
  name : 'DescPhoto',
  computed: {
    getPhoto(){
      return descPhoto
    },
    currentImage(){
      return this.getPhoto.find(
        (period) => period.route === this.$route.params.name
      )
    }
  }
}

</script>

<style>
  .photos{
    width: 100%;
    height: auto;
    display: block;
  }
  .photos img {
    width: 80%;
  }
</style>


