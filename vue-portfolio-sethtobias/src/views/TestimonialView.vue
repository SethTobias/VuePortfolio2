<template>
  <div class="testimonial-container">
    <h2>Peer Reviews:</h2>
    <div class="nav-container">
      <div class="carousel-item-indicator previous" @click="nextItem(-1)">
        <i
          class="fa-solid fa-circle-chevron-left fa-2xl"
          style="color: var(--background)"
        ></i>
      </div>
      <div class="link-items-testimonial one">
        <div class="testimonial-items1">
          <div class="card1 testimonial-card">
            <div class="card1 container-grid">
              <div class="card1 img-container">
                <img src="https://i.ibb.co/5Bhw7Nw/Ty-Headshot.jpg" alt="" />
              </div>
              <div class="card1 description">
                <div class="card1 description-collapsed">
                  <div class="card1 description-collapsed-content">
                    <p>Tyheisha Johnson</p>
                  </div>
                  <div class="card1 description-collapsed-content">
                    <p>Colleague</p>
                  </div>
                </div>
                <div class="card1 description-expanded">
                  <p>
                    Seth is a charismatic and generous person, he connects with
                    everyone in the room. He's analytical and provides help
                    whenever he can. He's determined to achieve the best out of
                    everyday and motivates those around him as well.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card2 testimonial-card">
            <div class="card2 container-grid">
              <div class="card2 img-container">
                <img src="https://i.ibb.co/KKWZB9V/veronique.jpg" alt="" />
              </div>
              <div class="card2 description">
                <div class="card2 description-collapsed">
                  <div class="card2 description-collapsed-content">
                    <p>Veronique Nappie
</p>
                  </div>
                  <div class="card2 description-collapsed-content">
                    <p>Colleague</p>
                  </div>
                </div>
                <div class="card2 description-expanded">
                  <p>
                    Seth Tobias is both kind and compassionate. The atmosphere
                    that he brings into one's presence is calming and
                    comforting. He has the ability to brighten anyone's day.
                    Seth's work ethic and determination is admirable and
                    inspirational.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card3 testimonial-card">
            <div class="card3 container-grid">
              <div class="card3 img-container">
                <img
                  src="https://i.ibb.co/k3bpgZH/Zubaidah-Headshot.jpg"
                  alt=""
                />
              </div>
              <div class="card3 description">
                <div class="card3 description-collapsed">
                  <div class="card3 description-collapsed-content">
                    <p>Zubaidah Isaacs</p>
                  </div>
                  <div class="card3 description-collapsed-content">
                    <p>Colleague</p>
                  </div>
                </div>
                <div class="card3 description-expanded">
                  <p>
                    Seth is a very friendly person and is very committed to his
                    work. He is very hardworking and has good social skills and
                    is good at problem-solving and very enthusiastic too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="link-items-testimonial two">
        <div class="testimonial-items2">
          <div class="card4 testimonial-card">
            <div class="card4 container-grid">
              <div class="card4 img-container">
                <img
                  src="https://i.ibb.co/gJCqRH6/Ntokozo-Headshot.jpg"
                  alt=""
                />
              </div>
              <div class="card5 description">
                <div class="card5 description-collapsed">
                  <div class="card5 description-collapsed-content">
                    <p>Ntokozo Sithebe</p>
                  </div>
                  <div class="card5 description-collapsed-content">
                    <p>Colleague</p>
                  </div>
                </div>
                <div class="card5 description-expanded">
                  <p>
                    Seth is a very enthusiastic about life. Everything he talks
                    about has life or character. He is like a sunflower, always
                    blossoming.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card5 testimonial-card">
            <div class="card5 container-grid">
              <div class="card5 img-container">
                <img
                  src="https://i.ibb.co/Ny7VbgH/Naeema-Headshot.jpg"
                  alt=""
                />
              </div>

              <div class="card4 description">
                <div class="card4 description-collapsed">
                  <div class="card4 description-collapsed-content">
                    <p>Naeema Omar</p>
                  </div>
                  <div class="card4 description-collapsed-content">
                    <p>Colleague</p>
                  </div>
                </div>
                <div class="card4 description-expanded">
                  <p>
                    Seth Tobias always brings great energy to the team. He has
                    solid attention to detail which is why he is often
                    designated as our go-to debugger. He is self-driven and
                    always go above and beyond with any task he's given.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card6 testimonial-card">
            <div class="card6 container-grid">
              <div class="card6 img-container">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTZRbjgb8dGHH8yKPYGy1tzTdp3j8JL_XJvL_LZYePVZNVNyGPu52iIMfsC0TPAYIr_9mE0qXgGx6D-npB6x43tdiWMUg=s2560"
                  alt=""
                />
              </div>
              <div class="card6 description">
                <div class="card6 description-collapsed-content">
                  <p>Matthew Dean Brown</p>
                </div>
                <div class="card6 description-collapsed-content">
                  <p>Colleague</p>
                </div>
                <div class="card6 description-expanded">
                  <p></p>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="carousel-item-indicator next" @click="nextItem(1)">
        <i
          class="fa-solid fa-circle-chevron-right fa-2xl"
          style="color: var(--background)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestimonialView",
  data() {
    return {
      carouselIndex: 1,
    };
  },
  methods: {
    carouselSetItem() {
      return this.carouselIndex;
    },
    displayItem(n) {
      let c = 0;
      let carouselItems = document.querySelectorAll(".link-items-testimonial");
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

* {
  color: var(--text);
}
.carousel-main-container {
  max-width: 1000px;
  position: relative;
  margin: 0 auto;
}
.carousel-item {
  display: none;
}

.testimonial-container {
  margin: 0 auto;
  width: 1250px;
  margin-bottom: 25px;
}

.carousel-item-indicators {
  cursor: pointer;
  position: absolute;
  display: flex;
  place-content: center space-evenly;
  user-select: none;
}
.carousel-item-indicator.previous,
.carousel-item-indicator.next {
  cursor: pointer;
  z-index: 1;
  align-content: center;
}
.carousel-item-index {
  position: absolute;
  top: 0;
  left: 0;
}

.nav-container {
  display: flex;
  place-content: center;
}

.link-items-testimonial.two {
  display: none;
}
.nav-link {
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
  max-width: 1250px;
  width: 1250px;
  min-width: 250px;
}

h2 {
  font-size: 2rem;
  text-align: center;
  color: var(--secondary);
}

.testimonial-card {
  background-color: var(--secondary);
  height: fit-content;
  width: fit-content;
  border: 7.5px groove var(--text);
  margin: 10px auto;
  justify-content: center;
}
.testimonial-card:hover {
  border-color: var(--secondary);
}
.link-items-testimonial.one .testimonial-items1,
.link-items-testimonial.two .testimonial-items2 {
  /* grid-area: 1/1/2/2; */
  width: 1200px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.testimonial-items1 .testimonial-card {
  background-color: var(--secondary);
}

.container-grid {
  height: 400px;
  width: 300px;
  display: grid;
  grid: "img" 75% "description" 25% / 1fr;
}

.testimonial-items1 .container-grid:hover,
.testimonial-items2 .container-grid:hover {
  animation: cardExpand 1s forwards;
}

@keyframes cardExpand {
  0% {
    grid: "img" 75% "description" 25% / 1fr;
  }

  100% {
    grid: "img" 0% "description" 100% / 1fr;
  }
}

.img-container {
  grid-area: img;
}

.img-container img {
  width: 100%;
  height: 100%;
}

.testimonial-items1 .description,
.testimonial-items2 .description {
  grid-area: description;
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.1rem;
}

.description-collapsed-content {
  text-align: center;
}

.description-expanded {
  text-align: center;
  /* padding: 0 25px; */
  font-size: 1rem;
}
.testimonial-items1 .description-expanded,
.testimonial-items2 .description-expanded {
  overflow: hidden;
}

.testimonial-items2 {
  grid-area: 1/1/2/2;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.testimonial-items2 .testimonial-card {
  background-color: var(--primary);
}

@media screen and (max-width: 300px) {
  .carousel-main-container {
    width: 300px;
  }
  .carousel-item {
    display: none;
  }
  .carousel-item-indicators.next,
  .carousel-item-indicators.previous {
    width: 25px;
  }
  .carousel-item-indicator.next i,
  .carousel-item-indicator.previous i {
    font-size: 25px;
  }

  .link-items-testimonial.two {
    display: none;
  }
  .nav-link {
    margin: 0 auto;
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 250px;
  }

  .testimonial-container {
    margin: 0 auto;
    width: 250px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .testimonial-card {
    background-color: var(--secondary);
    height: fit-content;
    width: fit-content;
    margin: 10px auto;
  }
  .link-items-testimonial.one .testimonial-items1,
  .link-items-testimonial.two .testimonial-items2 {
    /* grid-area: 1/1/2/2; */
    width: 250px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  .container-grid {
    height: 250px;
    width: 200px;
  }

  .testimonial-items1 .description,
  .testimonial-items2 .description {
    font-size: 0.75rem;
  }

  .description-expanded {
    font-size: 0.7rem;
  }

  .testimonial-items2 {
    flex-flow: column;
    justify-content: space-evenly;
    margin: 10px auto;
  }
}
</style>
