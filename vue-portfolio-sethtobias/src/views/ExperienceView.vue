<template>
  <h2>Experience:</h2>
  <div class="experience-container">
    <div class="experience row1">
      <img
        src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYT_hR8XuX8gw_eFU_k7bmowuLZnJuBPap-MmZDNXSP3X-6LrvMIGo_rvFaLl_N8SE1vFEJYIP5JlCn6RmYOLQVN7Rp3BA=s1600"
        class="experience fluid"
      />
      <div class="experience-education">
        <h3>Education</h3>
        <h4>Matric Results</h4>
        <div class="matric-flex">
          <div class="matric-mini-flex">
            <h5>Subject</h5>
            <h5>Mark Achieved</h5>
          </div>
          <div class="matric-mini-flex">
            <p>Computer Applications:</p>
            <p>82%</p>
          </div>
          <div class="matric-mini-flex">
            <p>Life Sciences:</p>
            <p>80%</p>
          </div>
        </div>
      </div>
      <div class="experience-skills">
        <h3>Skills:</h3>
        <div class="skills-languages">
          <h4>Languages:</h4>
          <div class="skills-flex">
            <i class="fa-brands fa-html5 fa-2xl"></i>
            <i class="fa-brands fa-css3-alt fa-2xl"></i>
            <i class="fa-brands fa-js fa-2xl"></i>
          </div>
        </div>
        <div class="skills-frameworks">
          <h4>Frameworks:</h4>
          <div class="skills-flex">
            <i class="fa-brands fa-bootstrap fa-2xl"></i>
            <i class="fa-brands fa-vuejs fa-2xl"></i>
          </div>
        </div>
        <div class="skills-other">
          <h4>Other Skills:</h4>
          <div class="skills-flex">
            <i class="fa-brands fa-figma fa-2xl"></i>
            <i class="fa-brands fa-git-alt fa-2xl"></i>
          </div>
        </div>
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
        src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYS1tnRyTKo9R17E-1rhgqL4o6JVezI5bUgfWjMx2xideFx_ep2O3kMiiDYHKcacVZo_YwQeRbG4dH8MZTj6gH5TIKfkzQ=s1600"
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
.experience-container {
  margin: 0 auto;
  width: 1250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.experience {
  display: flex;
  flex-direction: row wrap;
  justify-content: space-evenly;
  border: 10px var(--secondary) groove;
}

.experience img {
  height: 450px;
  width: 450px;
  border: 5px var(--accent) solid;
}

.experience-volunteer {
display: flex;
flex-flow: row wrap;
align-content: center;
justify-content: space-evenly;
}

.experience-volunteer-1,.experience-volunteer-2 {
border: 2px var(--background) solid;
margin: 10px;

}

.skills-flex {
  display: flex;
  justify-content: space-evenly;
}

</style>
