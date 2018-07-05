<template>
  <div id="app">
    <Header></Header>
    <SocialMedia></SocialMedia>
    <TechList></TechList>
    <Talks></Talks>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SocialMedia from './components/SocialMedia.vue'
import TechList from './components/TechList.vue'
import Talks from './components/Talks.vue'

export default {
  name: 'app',
  components: {
    Header,
    SocialMedia,
    TechList,
    Talks
  }
}
</script>

<style>
  h1 {
    margin-top: 0px;
    text-align: left;
    font-size: 80px;
    font-family: 'Athiti', sans-serif;
  }
  h2 {
    text-align: left;
    font-size: 50px;
    font-family: 'Athiti', sans-serif;
  }
  h5 {
    text-align: left;
    font-size: 35px;
    font-family: 'Athiti', sans-serif;
  }
  p {
    text-align: justify;
    font-size: 25px;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .img-resize {
    width: 100px;
    height: 100px;
  }
  .img-margin {
    margin: 50px;
  }
  .img-margin img {
    -webkit-transition: all 0.3s ease; /* Safari and Chrome */
    -moz-transition: all 0.3s ease; /* Firefox */
    -ms-transition: all 0.3s ease; /* IE 9 */
    -o-transition: all 0.3s ease; /* Opera */
    transition: all 0.3s ease;
  }

  .img-margin:hover img {
      -webkit-transform:scale(1.35); /* Safari and Chrome */
      -moz-transform:scale(1.35); /* Firefox */
      -ms-transform:scale(1.35); /* IE 9 */
      -o-transform:scale(1.35); /* Opera */
      transform:scale(1.35);
  }
  .header-margin {
    padding-top: 80px;
    margin-left: 50px;
  }
  .title-margin {
    margin: 50px;
  }
  .paragraph-margin {
    margin: 0px 100px;
    padding: 170px 0px;
  } 
  .parallax {
    /* The image used */
    background-image: url("./assets/capa.jpg");

    /* Set a specific height */
    min-height: 350px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    filter: grayscale(1);
  }
</style>
