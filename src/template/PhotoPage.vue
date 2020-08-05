<template>
  <div class="wrapper">
    <div v-for="photo in photos" :key="photo.title">
      <div class="wrapper-photo">
        <img :src="photo.img" alt="image" />
        <h3>{{ photo.title }}</h3>
        <router-link :to="photo.nextLink">
          <button>VOIR PLUS</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import photos from '@/utils/categoriesPhoto.json'
export default {
  name : 'PhotoPage',
  data(){
    return {
      photos : photos
    }
  }
}
</script>

<style>
  .wrapper{
    width: 100%;
    height: 100vh;
  }
</style>


