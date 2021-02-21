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
    <button>
      <router-link :to="currentImage.next">
        <h3>Next : {{ currentImage.titleNext }}</h3>
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
  },
  mounted() {
    ScrollReveal().reveal(".bobo", { delay: 500 });
  },
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
    width: 100%;
    margin: 10px 0px;
  }
  button {
    width: 100%;
    height: 70px;
    background: black;
    a {
      color: white;
      text-decoration: none;
      font-size: 14px;
    }
  }
}
.reveal {
  transform: translateY(-50);
}
</style>
