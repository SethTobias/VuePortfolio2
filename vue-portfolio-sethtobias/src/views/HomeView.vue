<template>
  <div class="main-container">
    <div class="intro-container">
         <div class="intro-img">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQOaEOcG2XSy5xi6W1b0C3DXLH99AyX9wrRIR_9wAxoe4IXAeNjibAQsYXK2gdj-BTwPtW6t_rB8niTyqKmaZP1bo8OoA=s1600"
            class="intro fluid"
          />
        </div>
        <div class="intro-content">
          <p>I am Seth Tobias.</p>
          <p>An Aspiring Developer.</p>
          <p>Based in Tableview, CapeTown.</p>
        </div>
    </div>
  <div class="sub-container">
    <div class="recent-container">
      <h1>
        My Recent Project:
      </h1>
      <div class="recent-card">
        <h2>Vue Portfolio:</h2>
          <div class="recent-img">
          <img src="" class="recent fluid">

          </div>
          <div class="recent-buttons">
            <div>View Project?</div>
            <div>View Project Page?</div>
            <div>View Project gallery?</div>
          </div>
      </div>
    </div>
    <div class="cv-container">
      <h1>
        Resume and CV:
      </h1>
      <div class="cv-card">
        <div class="cv-img">
          <img src="">
        </div>
        <div class="cv-buttons">
          <div>Download</div>
          <div>Print</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView'
}
</script>

<style scoped>

:root {
  --text: #002e28;
  --background: #e0fffa;
  --primary: #008a70;
  --secondary: #5cd1ff;
  --accent: #007cf0;
}

.main-container {
  min-width: 250px;
  width: auto;
  max-width: 1250px;
  margin: 0 auto;
}

.intro-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.intro.fluid {
  max-width: 500px;
  border: 5px solid var(--secondary);
}

.intro-content {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  text-align: center;
  font-size: 50px;
  color: var(--secondary);
}

.intro-content p {
  line-height: 0;
}

.sub-container {
  min-width: 250px;
  width: auto;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.recent-container {
  min-width: 250px;
  width: 520px;
  max-width: 520px;
  min-height: 295px;
  height: auto;
  max-height: 475px;
}

.recent-container h1{
  text-align: center;
}

.recent-card {
  background-color: var(--primary);
  border: 5px solid var(--secondary);
  border-radius: 50px;
  min-width: 250px;
  width: auto;
  max-width: 400px;
  min-height: 240px;
  height: auto;
  max-height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.recent-img {
  min-width: 138px;
  width: 200px;
  max-width: 200px;
  min-height: 152px;
  height: auto;
  max-height: 270px;
}

.recent.fluid {
  
}

.recent-buttons {
  display: flex;
  margin: auto;
}

.recent-buttons div {
  background-color: var(--background);
  border-radius: 20px;
  min-width: 48px;
  width: auto;
  max-width: 90px;
  min-height: 35px;
  height: auto;
  max-height: 50px;
  text-align: center;
  margin: auto 5px 10px 5px;
}

.cv-container {
  min-width: 250px;
  width: 520px;
  max-width: 520px;
  min-height: 295px;
  height: auto;
  max-height: 475px;
}

.cv-container h1{
  text-align: center;
}

.cv-card {
  background-color: var(--primary);
  border: 5px solid var(--secondary);
  border-radius: 50px;
  min-width: 250px;
  width: 400px;
  max-width: 400px;
  min-height: 240px;
  height: auto;
  max-height: 350px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}

.cv-img {
  min-width: 138px;
  width: 200px;
  max-width: 200px;
  min-height: 152px;
  height: auto;
  max-height: 270px;
}

.cv.fluid {}

.cv-buttons {
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.cv-buttons div {
  background-color: var(--background);
  border-radius: 20px;
  min-width: 48px;
  width: auto;
  max-width: 90px;
  min-height: 35px;
  height: auto;
  max-height: 50px;
  text-align: center;

}
</style>