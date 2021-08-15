<script>
export default {
  setup() {},
};
</script>



<template>
  <div class="cc-container">
    <h1>Quotes</h1>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cc-container {
  border: 1px solid red;
  width: 100%;
  height: fit-content;
  padding: 0 9.11px;
}

#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1 {
  margin: 56px 0 135px;
  text-transform: lowercase;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: #1d1929;
}
</style>
