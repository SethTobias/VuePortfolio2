<template>
  <div class="projects-main-container">
    <h2>Projects:</h2>
    <div class="projects-container-grid">
            <div class="projects project-1" @click="flipCard(1)">
        <div class="front">
          <p>Time Converter</p>
          <p>HTML,CSS,JavaScript</p>
        </div>
        <div class="back">
          <p>This was one of the very first JavaScript projects I was assigned. It was a simple time converter to go from minutes to seconds. Overtime however I improved the functionality and overall styling of the project to the current point it is at now. It taught me the basics of DOM manipulation and the basics of how operators in JavaScript work.</p>
          <div class="icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-link"></i>
          </div>
       </div>
      </div>
           <div class="projects project-2" @click="flipCard(2)">
        <div class="front">
          <p>Literary Haven</p>
          <p>HTML,CSS,JavaScript</p>
        </div>
        <div class="back">
          <p>This was my very first project where I fully used JavaScript to implement a CRUD system into my project in order to create a very simple e-commerce website. This project really made clear to me the under lying issues of my lack of understanding of JavaScript. Thanks to this I took more time in order to understand the language more.</p>
          <div class="icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
      </div>
            <div class="projects project-3" @click="flipCard(3)">
        <div class="front">
          <p>Vroom Vroom Motors</p>
          <p>HTML,CSS,JavaScript,SQL</p>
        </div>
        <div class="back">
          <p>This was the very first project I completed while working with another developer. The project highlighted the importance of effective communication. We were also tasked for the first time to work with a database through the use of MySQL and the use of Node.js in order to effectively communicate with the database.</p>
          <div class="icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
      </div>
            <div class="projects project-4" @click="flipCard(4)">
        <div class="front">
          <p>Literary Connect</p>
          <p>HTML,CSS,JavaScript,SQL</p>
        </div>
        <div class="back">
          <p>Through this project I completed my first full scale Full-stack application/website. I completed a social media website where I implemented the basic functionality.</p>
          <div class="icons">
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    flipCard(index) {
      const card = document.querySelector(`.projects.project-${index}`);
      card.classList.toggle('flipped');
    }
  }
};
</script>

<style>
:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}

.projects-main-container {
  margin: 0 auto;
  margin-top: 50px;
  max-width: 1200px;
  min-width: 250px;
}

h2 {
  text-align: center;
}

.projects-container-grid {
  width: 1000px;
  height: 700px;
  display: flex;
  place-content: space-between space-evenly;
  flex-wrap: wrap;
}

.projects {
  background-color: var(--secondary);
  filter: blur(2.5px);
  
   perspective: 1000px;
  position: relative;
  text-align: center;
  width: 400px;
  height: 300px;
  border: 10px outset var(--text);
  cursor: pointer;
}

.projects:hover {
  border: 10px inset var(--accent);
  box-shadow: 5px 5px 10px var(--text);
  filter: blur(0px);
}

.projects .front,
.projects .back {
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.5s ease;
}

.projects .front {
  background-color: #5cd1ff;
}

.projects .back {
  background-color: #008a70;
  transform: rotateY(180deg);
}

.projects.flipped .front {
  transform: rotateY(180deg);
}

.projects.flipped .back {
  transform: rotateY(0deg);
}

</style>

