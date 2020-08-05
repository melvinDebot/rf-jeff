<template>
  <div class="wrapper">
    <div v-for="photo in photos" :key="photo.title">
      <router-link :to="photo.nextLink">
      <div class="wrapper-photo">
        <img :src="getphotoPath(photo.img)" alt="image" />
        <h3>{{ photo.title }}</h3>
      </div>
      </router-link>
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
    height: 100vh;
    h2{
      text-align: center;
    }
    .wrapper-photo{
      margin: 10px 0px;
      img{
        width: 100%;
      }
      h3{
        position: relative;
        bottom: 50px;
        left: 40%;
        color: white;
        
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
      left: 35%;
      color: white;
    }
  }
</style>


