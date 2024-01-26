<template>

<div class="main-container">
    <div class="main-content">
      <div class="story-container">
        <h1>My Story:</h1>
        <div class="story-img-container">
          <img src="" class="story-img" alt="" />
        </div>
      <div class="story-content">
        <h2>I am Seth Tobias</h2>
        <p>
          I am a 19-year-old aspiring Full-stack Web Developer. My journey
          started in 2020 when I first came across coding. I started with the
          fundamentals of HTML. I however abruptly stopped as my academics at
          the time were more important to me. I picked up where I left off
          earlier this year, as I matriculated in 2022 I found myself having a
          lot more free time. Through my efforts, I managed to have a basic
          understanding of HTML and CSS. In the meantime, while I was doing my
          studies I scoured the internet for courses on Web Development.
          Thanks to this I now find myself a part of the Life Choices Coding
          Academy. My journey in learning Web Development started at this
          point. I now find myself being able to create my very own Vue.js
          Portfolio.
        </p>
      </div>
    </div>
    <div class="hobbies-container">
      <h1>My Hobbies:</h1>
      <p>
        Bellow is an image map containing a few of my favourite hobbies to do
        in my free time. Consisting of Reading, watching Movies, Sport and
        listening to Music. Simply click the relevant item in the image to
        learn more!
      </p>
      <div class="hobbies-img-container">
        <img src="" alt="" class="hobbies-img fluid" />
      </div>
    </div>
  </div>
  <div class="sport-container">
  <h2>Sport:</h2>
  <img src="" alt="" />
  <img src="" alt="" />
  <img src="" alt="" />
  <p>
  In the early years of my life I had no particular interest for sport.
  The only times I would partake in any form of sport was for academic
  reasons or if I was asked to join in. This however changed when I learnt
  about Hockey. Form the very first time I walked onto the Hockey turf I
  knew it was a match made in heaven.
  </p>
  <p>
  Is what I would like to say. My love for the sport actually grew thanks
  to my desire to improve as a player. Through my constant failures within
  the sport I learnt to always get back up after getting knocked down.
  Along my journey as a Hockey player I learnt the importance of teamwork
  and dedication. I also learnt the joys of sport.
  </p>
  </div>
  <div class="music-container">
  <h2>
  Music:
  </h2>
  <p>
  I always enjoyed listening to music and singing along to my favourite songs. As we all do. My love for music only really started when I began LISTENING to music. Yes there is a difference. It all started with my English teacher and her rant about how all things have a deeper meaning. This got me thinking about the meaning behind the songs I listened to. This is where my journey of creating an playlist of songs that had more than just a catchy tune to listen to.
  </p>
  <div>
  <iframe src="" frameborder="0"></iframe>
  </div>
  </div>
  <div class="movie-container">
  <h2>
  Movies:
  </h2>
  <p>
  As a child I lost track of the countless hours I spent immersing myself in the world of movies. To say the my very persona was shaped thanks to the numerous characters is far form an understatement. Thanks to Stitch I have learnt to not allow what others think of us to have an impact on our actions. Also that change is possible if we welcome it. That coupled with my healthy obsession for romance films drives my hobby of watching movies. As it has a very special place in my heart.
  </p>
  <img src="" alt="">
  <img src="" alt="">
  <img src="" alt="">
  </div>
  <div class="reading-container">
  <h2>
  Reading:
  </h2>
  <p>
  People often quite shocked when I tell them that reading is one of my many hobbies. For myself though I would not have it any other way. I can start at a book for hours and feel like no time has passed what so ever. I enjoy the fact that simply words can create such a vivid picture in ones mind without even being to see it. The world of literature is so vast that you can lose yourself in countless books effortlessly. My favourite books to read include Manga, Manhua and the occasional novel.
  </p>
  <h2>
  My Current Top Reads:
  </h2>
  <div class="reading-img-container">
  <img src="" alt="">
  <img src="" alt="">
  <img src="" alt="">
  </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'AboutView'
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

body {
background-color: var(--text);
color: var(--secondary);
overflow-x: hidden;
}

.main-container {
max-width: 1250px;
width: 1250px;
min-width: 250px;
height: auto;
margin: 0 auto;
display: flex;
flex-flow: column wrap;
text-align: center;
}

.fluid {
max-width: 100%;
height: auto;
}

</style>