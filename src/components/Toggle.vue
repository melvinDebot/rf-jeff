<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input 
        type="checkbox" 
        :checked="(mode === 'dark') ? 'checked' : false" 
        @change="$emit('toggle')"
      />
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
import MoonDark from "../assets/icons/moon-dark-mode.svg";
import MoonLight from "../assets/icons/moon-light-mode.svg";
export default {
  props: ['mode'],
  components : {
    MoonDark,
    MoonLight
  }
}
</script>

<style>
.toggle-wrapper{
  
}
.toggle {
  position: absolute;
  display: inline-block;
  width: 47px;
  height: 22px;
  left: 86px;
  top: 21px;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #15202B;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.toggler:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 3px;
  bottom: 3px;
  background: #FFF;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .toggler {
  background: #2196F3;
}
input:focus + toggler {
  box-shadow: 0 0 2px #2196F3;
}
input:checked + .toggler:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.toggler.round {
  border-radius: 34px;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>