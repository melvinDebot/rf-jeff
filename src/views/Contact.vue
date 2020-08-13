<template>
  <div class="section--contact">
    <h2>Sur nous</h2>
    <img src="../assets/icons/rfjeff-img.png" alt="rf jeff"/>
    <p class="section--text">Nous sommes deux personnes passionnées par la vidéo et la photographie nous voulons vous partager nos créations et notre univers tout en essayant de captiver la jeunesse a travers l’art visuel. 
    Ce que nous aimons le plus c’est de sortir de l’ordinaire en sortant de notre zone de confort même a essayer différents styles pour que notre travail soit à chaque fois quelques choses de différents </p>
    <h3>Contact</h3>
    <div class="section--reseaux">
      <a href="https://www.instagram.com/rf_jeff/?hl=fr">
        <img src="../assets/icons/instagram.svg" alt="rf jeff instagram"/>
      </a>
      <a href="https://www.instagram.com/rf_jeff/?hl=fr">
        <img src="../assets/icons/youtube.svg" alt="rf jeff youtube"/>
      </a>
    </div>
    <p>Frandjylu@gmail.com</p>

  </div>
</template>

<script>
export default {
  name : 'Contact'
}
</script>

<style lang="scss">
  .section--contact{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h2{
      font-size: 32px;
      margin-bottom: 22px;
    }
    .section--text{
      margin-top: 20px;
      margin-bottom: 20px;
    }
    p{
      font-size: 14px;
      font-weight: 400;
    }
    .section--reseaux{
      width: 50%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 0px;
      img{
        width: 40px;
      }
    }
  }
  @media screen and (max-width:768px){
    .section--contact{
      height: auto;
      margin-top: 10%;
      img{
        width:80%;
        margin: 10px 10px;
      }
    }
  }
</style>




