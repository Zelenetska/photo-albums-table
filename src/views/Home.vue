<template>
  <div class="main-container">
    <div class="wrapper">
      <appHeader></appHeader>
      <div class="main-block">
        <router-link to="/table"><div class="button"><h3>Explore our collection</h3></div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  export default {
    name: "Home",
    components: {
      appHeader: Header
    }
  }
</script>

<style scoped>
  .main-container {
    height: 100vh;
    width: 100vw;
    background: url("../assets/home-bg.jpg") center center no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .wrapper {
    background-color: rgba(0, 0, 0, 0.50);
    height: 100vh;
    width: 100vw;
  }
  
  .main-block {
    display: flex;
    justify-content: center;
    padding-top: 25%;
  }

  .button {
    background-color: rgba(255, 255, 255, 0.88);
    padding: 20px 30px;
    border-radius: 5px;
    cursor: pointer;
  }

  h3 {
    margin: 0;
  }

</style>
