<template>
  <div class="experience-container">
  <h2>Education & Experience:</h2>
    <div class="education">
      <h3>Education (2018-2022)</h3>
      <div class="experience row1">
        <img
          src="https://i.ibb.co/KKp2qLv/matric-01.jpg"
          class="experience fluid"
        />
        <div class="experience-education">
          <p>
            I attended Table View Highschool for 5 years,here I completed my NSC
            qualification. Having acheived a Bachelors Pass. My subjects
            consisted of English HL, Afrikaans FAL, Mathematics, Life
            Orientation, Computer Applications Technology, Physical Sciences and
            Life Sciences.
          </p>
          <div class="matric-flex">
            <div class="matric-mini-flex">
              <h5>Subject Distinctions:</h5>
            </div>
            <div class="matric-mini-flex">
              <ul style="list-style: square">
                <li>Computer Applications Technology: 82%</li>
                <li>Life Sciences: 80%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3>Life Choices Academey (September 2023- March 2024)</h3>
      <div class="experience row1">
        <div class="experience-education">
          <p>
            I had the privilege to participate in a rigorous six-month
            Full-Stack Web Development Course at Life Choices Academy. Over the
            duration of the program, the initial three months were dedicated to
            foundational learning, where I gained proficiency in essential tools
            such as Figma for design, alongside acquiring fundamental skills in
            HTML, CSS, and JavaScript. This phase provided a solid groundwork
            for my journey as a Web Developer. Subsequently, the latter half of
            the course focused on advanced topics, including database management
            utilizing SQL. Moreover, I expanded my repertoire by delving into
            technologies such as Vue.js and Node.js. This comprehensive
            curriculum not only broadened my technical expertise but also
            equipped me with the versatility to adapt to dynamic industry
            demands.
          </p>
        </div>
        <img
          src="https://i.ibb.co/JqBR6td/graduation.jpg"
          class="experience fluid"
        />
      </div>
    </div>
    <h3>Work Experience:</h3>
    <div class="work-experience">
      <h4>LC Studios: (April 2024-Current)</h4>
      <div class="work-experience-container">
        <div class="txt">
          <p>
            Having completed an intensive six-month Full-stack Web Development
            course, equipping me with comprehensive skills in both front-end and
            back-end web development. Building upon this foundation, I have
            embarked on a career journey as a Web Developer Intern at LC
            Studios. This role allows me to apply my expertise in web
            development within a professional environment, further honing my
            abilities and contributing to meaningful projects under mentorship.
          </p>
        </div>
        <div class="img-container" style="margin: auto 0">
          <img src="https://i.ibb.co/5Y7ptL5/lc-studio.jpg" class="studio" />
        </div>
      </div>
    </div>
    <h3>Skills:</h3>
    <div class="skills">
      <div class="soft">
        <h4>Soft Skills:</h4>
        <ul style="list-style: none; margin: 0; padding: 0">
          <li>Collaboration</li>
          <li>Communication</li>
          <li>Problem-Solving</li>
          <li>Creative Thinking</li>
          <li>Analytical Thinking</li>
        </ul>
      </div>
      <img src="https://i.ibb.co/FX2YRpv/skills.jpg" class="skill fluid" />
      <div class="technical">
        <h4>Technical Skills:</h4>
        <ul style="list-style: none; margin: 0; padding: 0">
          <li>Figma</li>
          <li>Canva</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>MySQL</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
    <h3>Volunteer Experience:</h3>
    <div class="experience row2">
      <div class="experience-volunteer">
        <div class="experience-volunteer-1">
          <h4>Young People Leader:</h4>
          <p>Organizing Events</p>
          <p>Guiding younger members</p>
        </div>
        <div class="experience-volunteer-2">
          <h4>Fallen Angels Rescue:</h4>
          <p>Help walking dogs</p>
          <p>Upkeep of dog shelters</p>
          <p>Basic maintenance tasks</p>
        </div>
      </div>
      <img
        src="https://i.ibb.co/VvCf6nK/volunteer-01.jpg"
        class="experience fluid"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceView",
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
  font-size: 30px;
  text-align: center;
}

:where(.experience-education,.txt) p {
  width: 600px;
}

.experience-container {
  margin: 0 auto;
  width: 1250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.education {
  border: 10px var(--text) groove;
}
.education:hover {
  border: 10px var(--secondary) ridge;
}
.experience {
  display: flex;
  flex-direction: row wrap;
  justify-content: space-evenly;
}

.work-experience {
  border: 10px var(--text) groove;
}
.work-experience:hover {
  border: 10px var(--secondary) ridge;
}
.work-experience-container {
  display: flex;
  place-content: center space-around;
}
.experience img {
  height: 450px;
  width: 450px;
  border: 5px var(--secondary) groove;
  margin: auto 0;
}
.experience img:hover {
  border: 5px var(--text) ridge;
}

.experience.row2 {
  border: 10px var(--text) groove;
  padding: 10px;
}
.experience.row2:hover {
  border: 10px var(--secondary) groove;
}

.experience-volunteer {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-evenly;
}

.experience-volunteer-1,
.experience-volunteer-2 {
  border: 5px var(--text) ridge;
  margin: 10px;
}
:is(.experience-volunteer-1, .experience-volunteer-2):hover {
  border: 5px var(--secondary) ridge;
  margin: 10px;
}

.skills-flex {
  display: flex;
  justify-content: space-evenly;
}

.skills {
  border: 10px var(--text) groove;
  display: flex;
  place-content: center space-evenly;
  text-align: center;
}
.soft,
.technical {
  width: 500px;
}
.skills:hover {
  border: 10px var(--secondary) groove;
}

.skill {
  margin: auto 0;
  width: 450px;
  height: 300px;
  border: 5px var(--secondary) groove;
}

.skill:hover {
  margin: auto 0;
  width: 450px;
  height: 300px;
  border: 5px var(--text) groove;
}
.studio {
  border: 5px var(--secondary) groove;
}
.studio:hover {
  border: 5px var(--text) groove;
}

@media screen and (max-width: 300px) {
  :root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}

* {
  font-size: 1rem;
}

p,li {
  font-size:.75rem;
}

:where(.experience-education,.txt) p {
  width: 200px;
}

.experience-container {
  margin: 0 auto;
  width: 250px;
}

.experience {
  display: flex;
  flex-direction: column;
  place-content: center;
}

.experience-education p{
  margin: 0 auto;
}


.work-experience-container {
  display: flex;
  flex-direction: column;
}
.work-experience-container p{
 margin: 0 auto;
}
.experience img {
  height: 200px;
  width: 200px;
  border: 5px var(--secondary) groove;
  margin: 0 auto;
}

.experience-volunteer {
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-evenly;
}

.skills-flex {
  display: flex;
  justify-content: space-evenly;
}

.skills {
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;
}
.soft,
.technical {
  width: 200px;
  margin: 0 auto;
}


.skill {
  width: 200px;
  height: 150px;
  margin: 0 auto;
}
}
</style>
