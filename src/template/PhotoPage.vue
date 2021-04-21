<template>
  <div>
    <div class="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid>
      <div v-for="photo in photos" :key="photo.title">
        <div
          class="uk-card uk-card-default uk-card-body uk-background-cover uk-padding-remove"
          @click="$router.push(photo.nextLink)"
        >
          <Picture
            :alt="photo.altImg"
            :title="photo.title"
            :src="getphotoPath(photo.img)"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import photos from "@/utils/categoriesPhoto.json";
import Footer from "../template/Footer.vue";
import Picture from "../template/pictureGarlerie";

export default {
  name: "PhotoPage",
  components: {
    Footer,
    Picture,
  },
  data() {
    return {
      photos: photos,
    };
  },
  methods: {
    getphotoPath(name) {
      return require(`@/photos/${name}/${name}1.jpg`);
    },
  },
};
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
</style>
