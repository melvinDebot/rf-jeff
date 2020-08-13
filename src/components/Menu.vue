<template>
  <nav>
      <h4>Rf jeff</h4>
    <ul class="nav-link">
      <li><router-link to="/" class="menu__link">Home</router-link> </li>
      <li><router-link to="/photo" class="menu__link">Photos</router-link></li>
      <li><router-link to="/videos" class="menu__link">Videos</router-link> </li>
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
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  padding-top: 15px;
  
  h4{
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 22px;
    
  }
  .nav-link{
    display: flex;
    
    justify-content: space-evenly;
    width: 100%;
    z-index: 3;
    li{
      list-style: none;
      align-items: right;
    }
    a {
      text-decoration: none;
      letter-spacing: 3px;
      font-weight: 400;
      font-size: 14px;
    }
  }
  
}
#nav-icon1{
  display: none
}
#nav-icon1{
  width: 27px;
  height: 19px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}
#nav-icon1 span{
  display: block;
  position: absolute;
  height: 5px;
  width: 100%;
  background: lightgreen;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 11px;
}

#nav-icon1 span:nth-child(3) {
  top: 23px;
}
#nav-icon1.open span:nth-child(1) {
  top: 18px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#nav-icon1.open span:nth-child(3) {
  top: 18px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

@media screen  and (max-width:1024px){
  .nav-link{
    width: 60%;
  }
}
@media screen  and (max-width:768px){
  .nav-link{
    position: absolute;
    right: 0;
    height: 92vh;
    top: 8vh;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    transform: translateX(130%);
    transition: transform 0.5s ease-in;
    a {
      color: white;
    }
    
  }
  #nav-icon1{
    display: block;
  }
}
.nav-active {
  transform: translateX(0%)
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
}
.dark .nav{
  background: black;
}
</style>


