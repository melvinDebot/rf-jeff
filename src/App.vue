<template>
  <div id="app" :class="mode">
    <Menu :mode="mode" @toggle="toggle"/>
    <router-view/>
  </div>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'app',
  data () {
    return {
      mode: 'light'
    }
  },
  components: {
    Menu,
  },
  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  }
}
</script>



<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  padding: 0 15em;
  width: 100%;
  height: auto;
}
.dark {
  background: #192734;
  color: #E8E8E8;
}
@media only screen and (max-width: 750px){
  #app {
  padding: 0 20px;
  }
}




#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
