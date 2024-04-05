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
             <a href="https://github.com/SethTobias/TimeConverter" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://jovial-biscuit-82d853.netlify.app"  target="blank"><i class="fa-solid fa-link"></i></a>
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
            <a href="https://github.com/SethTobias/Literary-Haven" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://candid-banoffee-3168bc.netlify.app"  target="blank"><i class="fa-solid fa-link"></i></a>
          </div>
        </div>
      </div>
            <div class="projects project-3" @click="flipCard(3)">
        <div class="front">
          <p>Momentum Motors</p>
          <p>HTML,CSS,JavaScript,SQL</p>
        </div>
        <div class="back">
          <p>This was the very first project I completed while working with another developer. The project highlighted the importance of effective communication. We were also tasked for the first time to work with a database through the use of MySQL and the use of Node.js in order to effectively communicate with the database.</p>
          <div class="icons">
             <a href="https://github.com/SethTobias/Node_Eomp" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://node-js-562d4.web.app/"  target="blank"><i class="fa-solid fa-link"></i></a>
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
             <a href="https://github.com/SethTobias/Literary_Connect" target="blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://literary-connect.web.app/"  target="blank"><i class="fa-solid fa-link"></i></a>
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
  width: 1200px;
}

h2 {
  text-align: center;
  font-size: 2rem;
}

.projects-container-grid {
  margin: 0 auto;
  width: 1000px;
  height: 700px;
  display: flex;
  place-content: space-evenly space-evenly;
  flex-wrap: wrap;
}

.projects {
  background-color: var(--secondary);
   perspective: 1000px;
  position: relative;
  text-align: center;
  width: 400px;
  height: 300px;
  border: 10px groove var(--text);
  cursor: pointer;
}

.projects:hover {
  border: 10px ridge var(--accent);
  box-shadow: 5px 5px 10px var(--text);
}

.projects .front p{
  color: var(--text);
  font-size: 1.5rem;
}

:is(.projects) :where(.front,.back) {
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.5s ease;
  filter: blur(2.5px);

}

:is(.projects) :where(.front,.back):hover {
  filter: blur(0px);

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

.icons {
  display: flex;
  place-content: center space-evenly;
  transform: scale(2);
  margin-top: 25px;
  width: 125px;
  margin: 0 auto;
}

@media screen and (max-width: 300px) {

.projects-main-container {
  width: 300px;
  margin: 0;
}

h2 {
  text-align: center;
  font-size: 2rem;
}

.projects-container-grid {
  margin: 0;
  width: 290px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  place-content: center;
  }

.projects {
  width: 250px;
  height: 300px;
}



.projects .front p{
  font-size: 1rem;
}
.projects .back p{
  font-size: .75rem;
}

:is(.projects) :where(.front,.back) {

  filter: blur(0);

}

.icons {
  display: flex;
  place-content: center space-evenly;
  transform: scale(2);
  margin-top: 25px;
  width: 125px;
  margin: 0 auto;
}
}

</style>

