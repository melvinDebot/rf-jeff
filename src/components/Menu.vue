<template>
  <nav>
      <h4>Rf jeff</h4>
    <ul class="nav-link">
      <li><router-link to="/" class="menu__link">Home</router-link> </li>
      <li><router-link to="/photo" class="menu__link">Photos</router-link></li>
      <li><router-link to="/videos" class="menu__link">Videos</router-link> </li>
      <li><router-link to="/videos" class="menu__link">Shops</router-link> </li>
      <li><router-link to="/contact" class="menu__link">Contact</router-link></li>
      <Toggle :mode="mode" @toggle="$emit('toggle')"/>
    </ul>
    <!-- <div class="burger" @click="open">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div> -->
    <div id="nav-icon1" @click="open">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
import Toggle from '@/components/Toggle.vue'

export default {
  name : 'Menu',
  props: ['mode'],
  components : {
    Toggle
  },
  data : ()=> {
    return {
      show : false
    }
  },


  methods : {
    open(){
      const nav = document.querySelector('.nav-link')
      const navLinks = document.querySelectorAll('.nav-link li')
      const burger = document.querySelector('#nav-icon1')
      nav.classList.toggle('nav-active')
      burger.classList.toggle('open')
    },

  },
}
</script>

<style lang="scss" scoped>
@import '../styles/Menu.scss';
</style>


