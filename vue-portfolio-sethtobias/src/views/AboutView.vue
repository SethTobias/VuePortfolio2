<template>
  <div class="main-container">
    <h1>My Story:</h1>
    <div class="story-container">
      <img
        src="https://i.ibb.co/yPj8RDj/Seth-Matric01.jpg"
        class="story fluid"
      />
      <div class="story-content">
        <h2>I am Seth Tobias.</h2>
        <p>
          I was born on the 27th of May 2004, and I am currently
          {{ getCurrentAge() }} years old. Proficient in both English and
          Afrikaans, I possess strong communication skills in both languages.
          Following the completion of my six-month journey at Life Choices
          Academy, my passion and dedication for coding have intensified. I am
          now highly motivated to excel within the ICT industry, embarking on a
          new role as an Intern at LS Studios. This opportunity allows me to
          channel my skills and knowledge towards achieving significant
          milestones in my career.
        </p>
      </div>
    </div>
    <div class="image-map-container">
      <h2>My Hobbies:</h2>
      <p>
        Bellow is an image map containing a few of my favourite hobbies to do in
        my free time. Consisting of Reading, watching Movies, Sport and
        listening to Music. Simply click the relevant item in the image to learn
        more!
      </p>
      <div class="image-maps">
        <div class="image-map-desktop">
          <!-- Image Map Generated by http://www.image-map.net/ -->
          <img
            src="https://i.ibb.co/4d1FzH4/image-map-desktop.png"
            usemap="#image-map"
          />

          <map name="image-map">
            <a href="#music">
              <area
                target=""
                alt="music"
                title="music"
                coords="181,232,77,94"
                shape="rect"
              />
            </a>
            <a href="#movies">
              <area
                target=""
                alt="movies"
                title="movies"
                coords="248,17,624,22,620,226,652,227,628,265,245,256,187,225,196,213,232,211"
                shape="poly"
              />
            </a>
            <a href="#sport">
              <area
                target=""
                alt="hockey"
                title="hockey"
                coords="899,49,919,56,926,76,297,718,402,777,388,805,187,866,142,944,91,952,29,817,38,592,53,568,99,571,137,591,152,674,232,692,237,578,248,542,284,526,318,537,332,568,349,580"
                shape="poly"
              />
            </a>
            <a href="#reading">
              <area
                target=""
                alt="reading"
                title="reading"
                coords="764,409,941,461,884,731,695,665"
                shape="poly"
              />
            </a>
          </map>
        </div>
        <div class="image-map-ipad">
          <!-- Image Map Generated by http://www.image-map.net/ -->
          <img
            src="https://i.ibb.co/ZG53D4K/image-map-ipad.png"
            usemap="#image-map-ipad"
          />

          <map name="image-map-ipad">
            <a href="#music">
              <area
                target=""
                alt="music"
                title="music"
                coords="54,65,120,159"
                shape="rect"
              />
            </a>
            <a href="#movies">
              <area
                target=""
                alt="movies"
                title="movies"
                coords="171,10,424,15,424,153,450,156,424,182,167,174,124,158,123,147,157,147"
                shape="poly"
              />
            </a>
            <a href="#sport">
              <area
                target=""
                alt="hockey"
                title="hockey"
                coords="614,36,630,34,638,52,206,488,271,524,278,547,194,574,122,598,102,651,60,649,21,571,26,408,39,389,84,392,101,421,102,463,160,472,171,415,162,391,179,363,210,360,228,382,225,413"
                shape="poly"
              />
            </a>
            <a href="#reading">
              <area
                target=""
                alt="reading"
                title="reading"
                coords="522,279,474,454,606,503,648,316"
                shape="poly"
              />
            </a>
          </map>
        </div>
        <div class="image-map-mid">
          <!-- Image Map Generated by http://www.image-map.net/ -->
          <img
            src="https://i.ibb.co/ZG53D4K/image-map-ipad.png"
            usemap="#image-map-mid"
          />

          <map name="image-map-mid">
            <a href="#music">
              <area
                target=""
                alt="music"
                title="music"
                coords="26,29,54,73"
                shape="rect"
              />
            </a>
            <a href="#movies">
              <area
                target=""
                alt="movies"
                title="movies"
                coords="55,65,73,66,77,5,196,6,195,69,208,71,196,82,85,80,61,75"
                shape="poly"
              />
            </a>
            <a href="#sport">
              <area
                target=""
                alt="hockey"
                title="hockey"
                coords="28,176,42,187,47,213,71,219,83,205,75,177,85,163,99,167,106,185,283,15,291,16,294,24,95,224,125,244,121,253,55,273,43,298,28,297,10,252,10,191,14,179"
                shape="poly"
              />
            </a>
            <a href="#reading">
              <area
                target=""
                alt="reading"
                title="reading"
                coords="218,207,241,127,296,145,277,229"
                shape="poly"
              />
            </a>
          </map>
        </div>
        <div class="image-map-mobile">
          <!-- Image Map Generated by http://www.image-map.net/ -->
          <img
            src="https://i.ibb.co/BtXY9wK/image-map-mobile.png"
            usemap="#image-map-mobile"
          />

          <map name="image-map-mobile">
            <a href="#music">
              <area
                target=""
                alt="music"
                title="music"
                coords="25,26,53,69"
                shape="rect"
              />
            </a>
            <a href="#movies">
              <area
                target=""
                alt="movies"
                title="movies"
                coords="122,5,181,6,181,63,196,66,182,76,73,75,54,67,69,59,69,33,71,3"
                shape="poly"
              />
            </a>
            <a href="#sport">
              <area
                target=""
                alt="hockey"
                title="hockey"
                coords="19,166,36,171,44,197,65,204,77,189,68,164,80,155,93,159,101,175,264,13,270,14,273,19,90,211,118,231,113,238,52,253,41,274,24,279,7,237,9,178"
                shape="poly"
              />
            </a>
            <a href="#reading">
              <area
                target=""
                alt="reading"
                title="reading"
                coords="221,117,202,195,261,216,278,135"
                shape="poly"
              />
            </a>
          </map>
        </div>
      </div>
    </div>

    <a id="sport">
      <h2>Sport:</h2>
    </a>
    <div class="sport-container">
      <div class="sport-main-container">
        <div class="sport-container-grid">
          <div class="img-center-end">
            <img src="https://i.ibb.co/fCVxvjj/Seth-Hockey06.jpg" alt="" />
          </div>
          <div class="img-end-end">
            <img src="https://i.ibb.co/jzBMLZv/Seth-Hockey01.jpg" alt="" />
          </div>
          <div class="txt-end-start">
            <p>
              In the early years of my life I had no particular interest for
              sport. The only times I would partake in any form of sport was for
              academic reasons or if I was asked to join in. This however
              changed when I learnt about Hockey. Form the very first time I
              walked onto the Hockey turf I knew it was a match made in heaven.
            </p>
          </div>
          <div class="txt-center-end">
            <p>
              Is what I would like to say. My love for the sport actually grew
              thanks to my desire to improve as a player. Through my constant
              failures within the sport I learnt to always get back up after
              getting knocked down. Along my journey as a Hockey player I learnt
              the importance of teamwork and dedication. I also learnt the joys
              of sport.
            </p>
          </div>
        </div>
      </div>
    </div>

    <a id="movies">
      <h2>Movies:</h2>
    </a>
    <div class="movies-container">
      <p class="txt-movies">
        As a child I lost track of the countless hours I spent immersing myself
        in the world of movies. To say the my very persona was shaped thanks to
        the numerous characters is far form an understatement. Thanks to Stitch
        I have learnt to not allow what others think of us to have an impact on
        our actions. Also that change is possible if we welcome it. That coupled
        with my healthy obsession for romance films drives my hobby of watching
        movies. As it has a very special place in my heart.
      </p>
      <img src="https://i.ibb.co/wdWhxxn/stitch.jpg" class="stitch" />
      <img src="https://i.ibb.co/7Rw9tGR/movie-2.jpg" class="big" />
      <!-- <div class="watchlist">
        <div class="img-span-row2-movies">
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRSGiddPnpYREHWY2gJzCH2ZabQs4rGKHPSMf6BxAc6kwg67FDcohC2esNIxgtnm1gMkmmHnCv0D7y7d17KFZRqslcfRg=s1600"
            alt=""
          />
        </div>
        <div class="double-watchlist">
          <div class="img-center-end-movies">
            <img
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYRNiBUENSJTBVeM7j6V1KaPDjl4sGayi0aS3-6UrxJNEgeRdeMDCRWHUph2_40OnS-vKw6aVf3OvPs9wOZJJKc3YRsD=s2560"
              alt=""
            />
          </div>
          <div class="img-start-end-movies">
            <img
              src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ_q4I1JsqfNENSyp2TgR9H2XtCmv26dNHffpeHgzyCBOQ17NUcGri0DQ1uRJpFbcnDu2YbADAqBWB742GQR7MnQp-v=s2560"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="txt-span-col2-movies">
        <p>
          As a child I lost track of the countless hours I spent immersing
          myself in the world of movies. To say the my very persona was shaped
          thanks to the numerous characters is far form an understatement.
          Thanks to Stitch I have learnt to not allow what others think of us to
          have an impact on our actions. Also that change is possible if we
          welcome it. That coupled with my healthy obsession for romance films
          drives my hobby of watching movies. As it has a very special place in
          my heart.
        </p>
      </div> -->
    </div>
    <a id="reading">
      <h2>Reading:</h2>
    </a>

    <div class="reading-container">
      <p>
        People often quite shocked when I tell them that reading is one of my
        many hobbies. For myself though I would not have it any other way. I can
        start at a book for hours and feel like no time has passed what so ever.
        I enjoy the fact that simply words can create such a vivid picture in
        ones mind without even being to see it. The world of literature is so
        vast that you can lose yourself in countless books effortlessly. My
        favourite books to read include Manga, Manhua and the occasional novel.
      </p>

      <h3>My Current Top Reads:</h3>
      <div class="reads-container">
        <img src="https://i.ibb.co/mc5nNyV/jungle-juice.jpg" class="r1" />
        <img src="https://i.ibb.co/hdC5TZd/31stpeice.jpg" class="r2" />
        <img src="https://i.ibb.co/xfcT5Q9/infinie-mage.jpg" class="r3" />
      </div>
    </div>
    <a id="music">
      <h2>Music & Gaming:</h2>
    </a>
    <div class="music-container">
      <div class="music">
        <h2>Music:</h2>
        <p class="music txt">
          I always enjoyed listening to music and singing along to my favourite
          songs. As we all do. My love for music only really started when I
          began LISTENING to music. Yes there is a difference. It all started
          with my English teacher and her rant about how all things have a
          deeper meaning. This got me thinking about the meaning behind the
          songs I listened to. This is where my journey of creating an playlist
          of songs that had more than just a catchy tune to listen to.
        </p>
        <iframe
          src="https://open.spotify.com/embed/playlist/5gTIHWi7j89AHID4noBOW2?utm_source=generator"
          width="95%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div class="gaming-container">
        <h2>Gaming:</h2>
        <p class="gaming txt">
          Gaming, for me, was a hobby I really enjoyed, as it allowed me to
          escape into a whole new world where there were no restrictions
          whatsoever. As the player, I could achieve feats I could never even
          begin to imagine doing myself. However, I became consumed in this
          other world where I could do what I wanted. This sense of freedom was
          something new to me and was very welcomed. I became where I spent the
          majority of my time. Though upon learning how games were made, I was
          left stunned. My ambition to learn coding then started as this was my
          own way to create the very world I wanted. Through this journey, I
          have come across many languages and the various uses for each
          language. My love for gaming never stopped, though, and to this day, I
          still play the occasional game. Even having picked up a few games to
          sharpen my CSS skills such as
          <a href="https://mastery.games/flexboxzombies/" target="blank"
            >Flexbox Zombies</a
          >
          and
          <a
            href="https://codingfantasy.com/games/css-grid-attack/play"
            target="blank"
            >Grid Attack</a
          >
          . Which teach the basics of Flexbox and Grid respectively.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  methods: {
    getCurrentAge() {
      const today = new Date();
      const birthday = new Date("2004-05-27");
      const currentAge = ` ${Math.floor(
        (today - birthday) / (1000 * 60 * 60 * 24) / 365.25
      )} `;
      return currentAge;
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
  color: var(--secondary);
}

.main-container {
  margin: 0 auto;
  max-width: 1250px;
  width: auto;
  min-width: 250px;
  overflow: hidden;
}
.story-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.sport-container {
  margin: 0 auto;
  max-width: 1250px;
  width: auto;
  min-width: 250px;
}

.sport-main-container {
  margin: 0 auto;
  max-width: 1250px;
  width: auto;
  min-width: 250px;
}

 h1 {
  text-align: center;
  font-size: 2.5rem;
  color: var(--secondary);
}

 h2 {
  text-align: center;
  font-size: 2rem;
  color: var(--secondary);
}

h3 {
  font-size: 1.5rem;
}
 
p {
  font-size: 1.5rem;
}

.fluid {
  width: 100%;
  height: auto;
}

.story.fluid {
  max-width: 600px;
  min-width: 250px;
  max-height: 650px;
  height: auto;
  border: 10px groove var(--text);
  margin: 0 auto;
}
.story.fluid:hover {
  border: 10px groove var(--secondary);
}
.story-content {
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  place-content: center;
}

.story-content h2,
.story-content h3 {
  margin-top: 0;
  color: var(--secondary);
}

.image-map-container {
  margin: 0 auto;
  max-width: 1250px;
  width: auto;
  min-width: 250px;
}
.image-map-container h2 {
  text-align: center;
  margin-bottom: 0;
}
.image-map-container p {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
  min-width: 250px;
  width: auto;
}
.image-map-container img {
  border: 10px groove var(--text);
}
.image-map-container img:hover {
  border: 10px groove var(--secondary);
}
.image-maps {
  margin: 0 auto;
  max-width: 1250px;
  width: auto;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image-map-desktop {
  margin: 0 auto;
  padding: 0 auto;
}

.image-map-ipad {
  display: none;
  margin: 0 auto;
}
.image-map-mid {
  display: none;
  margin: 0 auto;
}
.image-map-mobile {
  display: none;
  margin: 0 auto;
}
@media screen and (width < 301px) {
  .image-map-mobile {
    display: block;
  }
  .image-map-mid {
    display: none;
  }
  .image-map-ipad {
    display: none;
  }
  .image-map-desktop {
    display: none;
  }
}
@media screen and (301px < width < 730px) {
  .image-map-mobile {
    display: none;
  }
  .image-map-mid {
    display: block;
  }
  .image-map-ipad {
    display: none;
  }
  .image-map-desktop {
    display: none;
  }
}
@media screen and (730px < width < 1100px) {
  .image-map-mobile {
    display: none;
  }
  .image-map-mid {
    display: none;
  }
  .image-map-ipad {
    display: block;
  }
  .image-map-desktop {
    display: none;
  }
}
@media screen and (width > 1100px) {
  .image-map-mobile {
    display: none;
  }
  .image-map-mid {
    display: none;
  }
  .image-map-ipad {
    display: none;
  }
  .image-map-desktop {
    display: block;
  }
}

.sport-container {
  max-width: 1250px;
  width: auto;
  min-width: 250px;
}
.sport-container-grid {
  max-width: 1250px;
  width: auto;
  min-width: 250px;
  display: grid;
  grid: 1fr 1fr / repeat(2, fit-content);
}

.img-center-end {
  grid-area: 1/1/2/2;
  display: center;
  place-content: center;
}

.img-end-end {
  grid-area: 2/2/3/3;
  display: flex;
  place-content: center;
}

:is(.img-center-end, .img-end-end) img {
  border: 10px groove var(--text);
}
:is(.img-center-end) img {
  width: 500px;
}
:is(.img-end-end) img {
  width: 350px;
}
:is(.img-center-end, .img-end-end) img:hover {
  border-color: var(--secondary);
}
.txt-end-start {
  grid-area: 1/2/2/3;
  text-align: end;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.txt-center-end {
  grid-area: 2/1/3/2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
}
.stitch {
  border: 10px groove var(--text);
}
.stitch:hover {
  border-color: var(--secondary);
}
.big {
  border: 10px groove var(--text);
}
.big:hover {
  border-color: var(--secondary);
}
.reading-container {
  margin: 0 auto;
  max-width: 1250px;
  min-width: 250px;
}

.reading-container h2 {
  text-align: center;
}

.reading-container h3 {
  text-align: center;
}

.reading-container p {
  text-align: center;
}

.reads-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: center;
}

:is(.reads-container) :where(.r1, .r2, .r3) {
  max-height: 400px;
  min-height: 344px;
  max-width: 300px;
  min-width: 250px;
  border: 10px groove var(--text);
  box-shadow: var(--text) 10px 10px 10px;
  margin: 10px 0;
}

:is(.reads-container) :where(.r1, .r2, .r3):hover {
  border-color: var(--secondary);
}

.music-container {
  margin: 0 auto;
  max-width: 1250px;
  min-width: 250px;
  display: flex;
  place-content: center space-evenly;
  flex-flow: row wrap;
  text-align: center;
}

:is(.music,.gaming-container) {
  max-width: 600px;
  min-width: 250px;
}

.gaming-container{
  display: flex;
  flex-direction: column;
  place-content: center;
}


.gaming-container h3 {
  place-self:  center start;
}
.music-container h2 {
  text-align: center;
}

.music-text {
  text-align: center;
}
iframe {
  border: 5px outset var(--text);
  border-radius: 20px;
  margin: 0 auto;
}
iframe:hover {
  border-color: var(--secondary);
}
.stitch,
.big {
  height: auto;
  max-width: 600px;
  min-width: 250px;
  width: 500px;
  margin: 0 auto;
}
.txt-movies {
  text-align: center;
}

.movies-container {
  max-width: 1250px;
  min-width: 250px;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
}

@media screen and (max-width: 300px) {

  h1 {
  text-align: center;
  font-size: 2rem;
  color: var(--secondary);
}

 h2 {
  text-align: center;
  font-size: 1.5rem;
  color: var(--secondary);
}

h3 {
  font-size: 1rem;
}
 
p {
  font-size: 1rem;
}


  .fluid {
    width: 100%;
    height: auto;
  }

  .story-content {
    max-width: 250px;
    text-align: center;
    margin: 0 auto;
  }

  .sport-container-grid {
    margin: 0 auto;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  .sport-container-grid {
    margin: 0 auto;
  }

  .img-center-end {
    order: 3;
  }

  .img-end-end {
    order: 5;
  }

  :is(.img-center-end, .img-end-end) img {
    width: 250px;
  }

  .txt-end-start {
    order: 2;
    height: auto;
    max-width: 250px;
    width: auto;
  }

  .txt-center-end {
    order: 4;
    height: auto;
    max-width: 250px;
    width: auto;
  }
  .stitch,
  .big {
    height: auto;
    max-width: 250px;
    width: auto;
    margin: 0 auto;
  }

  .stitch {
    order: 1;
  }
  .txt-movies {
    text-align: center;
    order: 2;
  }

  .big {
    order: 3;
  }
  .img-end-end img,
  .img-center-end img {
    height: auto;
    width: 250px;
  }
}

</style>
