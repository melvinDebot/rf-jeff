<template>
  <div class="photos">
    <h1>{{ currentImage.title }}</h1>
    <img :src="getphotoPath(currentImage.imgTwo, 1)" alt="" class="image"/>
    <img :src="getphotoPath(currentImage.imgTwo, 2)" alt="" class="image"/>
    <router-link :to="currentImage.next">
      <h3>Suivant</h3>
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
  },
  methods : {
    getphotoPath(name, number){
      return require(`@/photos/${name}/${name}${number}.jpg`)
    },
  }
}

</script>

<style lang="scss" scoped>
  .photos{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
      width: 80%;
      margin: 10px 0px;
    }
  }
</style>


