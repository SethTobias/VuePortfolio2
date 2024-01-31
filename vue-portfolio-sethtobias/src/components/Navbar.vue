<template>
  <nav>
    <div class="nav-container">
      <div class="nav-icon">
        <router-link to="/"
          ><i class="fa-brands fa-vuejs fa-2xl" style="color: var(--text)"></i
        ></router-link>
      </div>
      <div class="nav-link">
        <div class="carousel-item-indicator previous" @click="nextItem(-1)">
          <i
            class="fa-solid fa-circle-chevron-left fa-2xl"
            style="color: var(--text)"
          ></i>
        </div>
        <div class="nav-link-grid">
          <div class="link-items one">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
          </div>
          <div class="link-items two">
            <router-link to="/experience">Experience</router-link>
            <router-link to="/testimonial">Testimonial</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
        <div class="carousel-item-indicator next" @click="nextItem(1)">
          <i
            class="fa-solid fa-circle-chevron-right fa-2xl"
            style="color: var(--text)"
          ></i>
        </div>
      </div>
      <div class="nav-settings">
        <div class="nav-settings-grid">
          <i class="fa-solid fa-gear fa-lg" style="color: var(--secondary)"></i
          ><i
            class="fa-solid fa-gear fa-lg"
            style="color: var(--secondary)"
          ></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      carouselIndex: 1 
    };
  },
  methods: {
    carouselSetItem() {
      return this.carouselIndex; 
    },
    displayItem(n) {
      let c = 0;
      let carouselItems = document.querySelectorAll(".link-items");
      if (n > carouselItems.length) {
        this.carouselIndex = 1; 
      }
      if (n < 1) {
        this.carouselIndex = carouselItems.length;
      }
      for (c = 0; c < carouselItems.length; c++) {
        carouselItems[c].style.display = "none";
      }
      carouselItems[this.carouselIndex - 1].style.display = "flex"; 
    },
    currentItem(n) {
      this.displayItem(this.carouselIndex); 
    },
    nextItem(n) {
      this.displayItem((this.carouselIndex += n)); 
    },
  },
};
</script>

<style scoped>
:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}
nav {
  margin-bottom: 25px;
}
.nav-container {
  display: grid;
  grid: "a b c" / 1fr 2fr 1fr;
  gap: 4rem;
  height: 10vh;
  background-color: var(--background);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* @media screen and (width < 300px) {
nav a {
font-size: 10px;
grid: "a b c" / 1fr 1fr 1fr;
}
} */
.nav-icon {
  grid-area: a;
  margin: auto;
}
.nav-link {
  grid-area: b;
  align-self: center;
  display: flex;
}
.nav-link-grid {
  position: relative;
  margin: 0 auto;
}
.link-items {
  display: none;
}

.link-items.one a,
.link-items.two a {
  margin: 0 30px;
}
.nav-settings {
  grid-area: c;
  margin: auto;
}
.nav-settings-grid {
  margin-top: 10px;
  display: grid;
  grid: 15px 15px / 1fr 1fr;
}
.nav-settings-grid i:nth-of-type(1n) {
  grid-area: 1/2/1/2;
}
.nav-settings-grid i:nth-of-type(2n) {
  grid-area: 2/1/2/1;
}

.nav-settings-grid i:hover {
  cursor: pointer;
}

/* App vue styles */
nav {
  padding: 30px;
}

nav a {
  font-weight: bolder;
  text-decoration: none;
  color: var(--text);
  font-size: 25px;
}

nav a.router-link-exact-active {
  color: var(--secondary);
}

.fluid {
  width: 100%;
  height: auto;
}

.carousel-item-indicator.previous,
.carousel-item-indicator.next {
  cursor: pointer;
  align-self: center;
}
</style>
