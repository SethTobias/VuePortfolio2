<template>
  <div class="main-container">
    <div class="intro-container">
      <div class="intro-img">
        <img
          src="https://i.ibb.co/m42qft3/LC-Headshot2.jpg"
          class="intro fluid"
        />
      </div>
      <div class="intro-content">
        <p>I am Seth Tobias.</p>
        <p>An Aspiring Developer.</p>
        <p>Based in Tableview, CapeTown.</p>
      </div>
    </div>
    <!-- <div class="sub-container">
<div class="recent-container">
<h1>
My Recent Project:
</h1>
<div class="recent-card">
<h2>Vue Portfolio:</h2>
<div class="recent-img">
<img class="recent fluid" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYTLtxmzBnoImDOB_2yd8TbQoDE10MnYH4hyBXUM1wtXjldqGuPCeb5Zgo5H9hfGLZpXaw9aVceU0oGWrC_3vH4aazqMpQ=s1600" >
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
<img
src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYR9JP9ZoP1E90DulmLQBzS59MU1q2iJ1oed1MzcSQ5JxfhQPAuuv-BToRSSR1ESD7dlnYS7XoUgm_wZwWHmFHk5Ts9OhQ=s2560"
class="fluid cv"/>
</div>
<div class="cv-buttons">
<div>Download</div>
<div>Print</div>
</div>
</div>
</div>
</div> -->
  </div>
</template>
<script>
export default {
  name: "HomeView",
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
  margin: 0 auto;
}
.intro-img {
    margin: 0 auto;
}
.intro.fluid {
  max-width: 400px;
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

/* .sub-container {
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
min-width: 138px;
width: 200px;
max-width: 200px;
min-height: 152px;
height: auto;
max-height: 270px;
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
width: 340px;
max-width: 340px;
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
margin: 0 auto;
}
.cv.fluid {
min-width: 140px;
width: 210px;
max-width: 210px;
}
.cv-buttons {
display: flex;
justify-content: space-between;
margin: 0 auto;
margin-top: 50px;
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
margin: 5px 40px;
} */

@media screen and (max-width: 300px) {
  .intro-content {
    font-size: 18px;
    margin: 0 auto;
    text-align: center;
  }
  .intro.fluid {
  max-width: 200px;
}
}
</style>
