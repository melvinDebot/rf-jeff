<template>
  <header class="header">
    <a class="header__icon"  @click="open"> close</a>
    <Toggle :mode="mode" @toggle="$emit('toggle')"/>
    <a class="header__logo" >Rf jeff</a>
    <nav class="menu">
      <router-link to="/" class="menu__link">Home</router-link> 
      <router-link to="/photo" class="menu__link">Photos</router-link> 
      <router-link to="/videos" class="menu__link">Videos</router-link> 
      <router-link to="/contact" class="menu__link">Contact</router-link> 
      
    </nav>
  </header>
</template>

<script>
import gsap from 'gsap'
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
      gsap.to('.menu',1, {
      x : 0
      })
    },
    
  },
}
</script>

<style>
.header__icon{
  display: none
}
.header{
  position: fixed;
  left: 0;
  right: 0;
  height: 66px;
  line-height: 66px;
  color: black;
  background: white;
  margin-bottom: 30px;
}
.dark .header {
  background: #15202B;
}

.header__logo{
  font-weight: bold;
  padding: 0 25px;
  float: left;
}
a{
  text-decoration: none;
  color: black;
}
.menu a {
  padding: 0 10px;
}

nav{
  display: block;
}

.menu{
  float: right;
  margin-right: 15px;
  color: black;
}

@media only screen and (max-width: 750px){
  .header{
    position: static
  }
  .header__icon{
    position: relative;
    display: block;
    float: right;
    width: 50px;
    height: 66px;
    cursor: pointer;
    z-index: 4;
    color: red;
  }
  .header__icon::after{
    content: '';
    position: absolute;
    display: block;
    width: 1rem;
    height: 0;
    top: 16px;
    left: 15px;
    
  }
  .menu{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    overflow-y: scroll;
    background: lightgreen;
    width: 100%;
    height: 100vh;
    background: black;
    transform: translateX(750px);
    margin: 0;
    padding: 10em 0;
  }
  .menu a {
    display: block;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: white
  }
}



</style>


