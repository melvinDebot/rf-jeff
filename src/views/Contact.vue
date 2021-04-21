<template>
  <div class="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
    <div class="uk-grid flex">
      <div class="uk-width-medium-2-3 uk-row-first">
        <div class="uk-panel uk-panel-header">
          <h3 class="uk-panel-title">Contact Me</h3>
          <form class="uk-form uk-form-stacked">
            <div class="uk-form-row">
              <label class="uk-form-label">Your name</label>
              <div class="uk-form-controls">
                <input type="text" placeholder="text enter" class="uk-width-1-1 height-size-input"/>
              </div>
            </div>
            <div class="uk-form-row">
              <label class="uk-form-label">Your email</label>
              <div class="uk-form-controls">
                <input type="mail" placeholder="text mail" class="uk-width-1-1 height-size-input"/>
              </div>
            </div>
            <div class="uk-form-row">
              <label class="uk-form-label">Your message</label>
              <div class="uk-form-controls">
                <textarea placeholder="text enter" class="uk-width-1-1" cols="100" row="9"/>
              </div>
            </div>
            <div class="uk-form-row">
              <div class="uk-form-controls">
                <button class="uuk-button uk-button-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="uk-width-medium-1-3">
        <div class="uk-panel uk-panel-box uk-panel-box-secondary">
          <h3 class="uk-panel-title">Contact details</h3>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../template/Footer.vue";
export default {
  name: "Contact",
  components: {
    Footer,
  },
};
</script>

<style lang="scss">
.height-size-input{
  height: 40px;
}
</style>
