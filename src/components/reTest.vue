<template>
  <div class="uk-container uk-container-large uk-margin-medium-top">
    <div class="uk-text-center" uk-grid>
      <div class="uk-width-1-2">
        <div class="uk-card uk-card-default uk-card-body">
          <form>
            <fieldset class="uk-fieldset">
              <legend class="uk-legend">Un projet</legend>

              <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Votre nom" />
              </div>
              <div class="uk-margin">
                <input class="uk-input" type="email" placeholder="Votre email" />
              </div>
              <div class="uk-margin">
                <textarea
                  class="uk-textarea"
                  rows="5"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <button class="uk-button uk-button-default">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="uk-width-1-2">
        <div class="uk-card uk-card-default uk-card-body">
          <h3>RF JEFF</h3>
          <p class="uk-text-left@s">
            Nous sommes deux personnes passionnées par la vidéo et la
            photographie nous voulons vous partager nos créations et notre
            univers tout en essayant de captiver la jeunesse a travers l’art
            visuel. Ce que nous aimons le plus c’est de sortir de l’ordinaire en
            sortant de notre zone de confort même a essayer différents styles
            pour que notre travail soit à chaque fois quelques choses de
            différents
          </p>
          <a class="uk-link-toggle uk-text-left@s" href="#">
            <span class="uk-link-heading">Instagram</span>
          </a>
          <p>a,dpo,xpw</p>
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
.section--contact {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    font-size: 32px;
    margin-bottom: 22px;
  }
  .section--text {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
  .section--reseaux {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0px;
    img {
      width: 40px;
    }
  }
}
@media screen and (max-width: 768px) {
  .section--contact {
    height: auto;
    margin-top: 10%;
    img {
      width: 80%;
      margin: 10px 10px;
    }
  }
}
</style>
