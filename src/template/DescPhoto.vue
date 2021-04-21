<template>
  <div class="photos">
    <h1>{{ currentImage.title }}</h1>
    <img
      :src="getphotoPath(currentImage.imgTitle, 1)"
      :alt="currentImage.altImg"
      class="image bobo"
    />
    <img
      :src="getphotoPath(currentImage.imgTitle, 2)"
      :alt="currentImage.altImg"
      class="image bobo"
    />
    <img
      :src="getphotoPath(currentImage.imgTitle, 3)"
      :alt="currentImage.altImg"
      class="image bobo"
    />
    <img
      :src="getphotoPath(currentImage.imgTitle, 4)"
      :alt="currentImage.altImg"
      class="image bobo"
    />
    <img
      :src="getphotoPath(currentImage.imgTitle, 5)"
      :alt="currentImage.altImg"
      class="image bobo"
    />
    <img
      :src="getphotoPath(currentImage.imgTitle, 6)"
      :alt="currentImage.altImg"
      class="image bobo"
    />
    <button @click="goToTheTop()">
      <router-link :to="currentImage.next">
        <h3 class="uk-text-muted uk-margin-remove uk-text-bolder">
          Next : {{ currentImage.titleNext }}
        </h3>
      </router-link>
    </button>
    <Footer />
  </div>
</template>

<script>
import descPhoto from "@/utils/descPhoto.json";
import ScrollReveal from "scrollreveal";
import Footer from "../template/Footer.vue";

export default {
  name: "DescPhoto",
  components: {
    Footer,
  },
  computed: {
    getPhoto() {
      return descPhoto;
    },
    currentImage() {
      return this.getPhoto.find(
        (period) => period.route === this.$route.params.name
      );
    },
  },
  methods: {
    getphotoPath(name, number) {
      return require(`@/photos/${name}/${name}${number}.jpg`);
    },
    goToTheTop() {
      window.scrollTo(0, 0);
      console.log("click");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.photos {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .image {
    width: 75%;
    margin: 10px 0px;
    @media (max-width: 700px) {
      width: 75%;
    }
  }
  button {
    width: 100%;
    height: 70px;
    background: black;
    a {
      color: white !important;
      text-decoration: none;
      font-size: 14px;
    }
  }
}
.uk-h3 {
  color: white;
}
.reveal {
  transform: translateY(-50);
}
</style>
