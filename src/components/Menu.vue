<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <router-link to="/" class="menu__link">Home</router-link>
        </li>
        <li>
          <router-link to="/photo" class="menu__link">Photos</router-link>
        </li>
        <li>
          <router-link to="/videos" class="menu__link">Vidéos</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Toggle from "@/components/Toggle.vue";

export default {
  name: "Menu",
  props: ["mode"],
  components: {
    Toggle,
  },
  data: () => {
    return {
      show: false,
    };
  },

  methods: {
    open() {
      const nav = document.querySelector(".nav-link");
      const navLinks = document.querySelectorAll(".nav-link li");
      const burger = document.querySelector("#nav-icon1");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("open");
    },
  },
};
</script>

<style lang="scss" scoped></style>
