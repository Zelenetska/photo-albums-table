<template>
  <div class="header-container">
    <div class="nav">
      <div class="nav-item"><router-link to="/">Home</router-link></div>
      <div class="nav-item"><router-link to="/table">Table</router-link></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  .header-container {
    background-color: rgba(255, 255, 255, 0.88);
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    height: 50px;
    padding: 15px;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }

  .nav-item {
    margin: 0 15px;
  }

  .nav-item a {
    color: #2a9e40;
    transition: all .5s ease-out;
    text-transform: uppercase;
    font-weight: 700;
  }

  .nav-item a:hover {
     text-decoration: none;
     color: #42c52c;
  }
</style>
