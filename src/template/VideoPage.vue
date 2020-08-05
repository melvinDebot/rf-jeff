<template>
  <div class="wrapper">
    <h2>En cours mgl</h2>
    <!-- <div v-for="photo in photos" :key="photo.title">
      <router-link :to="photo.nextLink">
      <div class="wrapper-photo">
        <img :src="getphotoPath(photo.img)" alt="image" />
        <h3>{{ photo.title }}</h3>
      </div>
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name : 'VideoPage'
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
        text-align: center;
        color: white;
        font-size: 22px;
        
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
