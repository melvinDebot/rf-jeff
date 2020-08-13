<template>
  <div class="wrapper">
    <div v-for="photo in photos" :key="photo.title">
      <router-link :to="photo.nextLink">
      <div class="wrapper-photo">
        <img :src="getphotoPath(photo.img)" :alt="photo.altImg" />
        <!-- <h3>{{ photo.title }}</h3> -->
      </div>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import photos from '@/utils/categoriesPhoto.json'
import Footer from '../template/Footer.vue'
export default {
  name : 'PhotoPage',
  components : {
    Footer
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
  .wrapper{
    width: 100%;
    height: 100%;
    h2{
      text-align: center;
    }
    .wrapper-photo{
      margin: 24px 0px;
      img{
        width: 100%;
      }
      h3{
        position: relative;
        bottom: 50px;
        text-align: center;
        color: white;
        font-size: 30px;
        
      }
    }
  }
  a{
    text-decoration: none;
  }
  @media screen  and (max-width:768px){
    h3{
      position: relative;
      bottom: 50px;
      color: white;
    }
  }
</style>


