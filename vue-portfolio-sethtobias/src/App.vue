<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "../src/components/Navbar.vue";
import Footer from "../src/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
body {
  background-color: var(--text);
}

:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}

.main-container {
  width: 1250px;
}

#app {
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fluid {
  width: 100%;
  height: auto;
}
</style>
