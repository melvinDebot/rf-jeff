<template>
  <div>
    <div class="wrapper">
      <div
        v-for="photo in photos"
        :key="photo.title"
        class="wrapper-photo"
        @click="$router.push(photo.nextLink)"
      >
        <Picture :alt="photo.altImg" :title="photo.title" :src="getphotoPath(photo.img)" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import photos from '@/utils/categoriesPhoto.json'
import Footer from '../template/Footer.vue'
import Picture from '../template/pictureGarlerie'

export default {
  name : 'PhotoPage',
  components : {
    Footer,
    Picture
  },
  data(){
    return {
      photos : photos
    }
  },
  methods : {
    getphotoPath(name){
      return require(`@/photos/${name}/${name}1.jpg`)
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  h2 {
    text-align: center;
  }
}

.wrapper-photo {
  margin: 0px 0px;
  width: 300px;
  position: relative;
}

a {
  text-decoration: none;
}
</style>


