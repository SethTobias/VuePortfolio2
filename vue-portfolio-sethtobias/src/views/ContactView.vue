<template>
  <div class="main-container">
    <div class="intro">
      <h2 class="header">Wanna Get In Touch? Here is How!</h2>
      <p class="txt">
        Either complete of the contact form found on the page or follow one of
        the many links to any of my social media pages located at the bottom of
        the page. This includes my Email address and telephone number.
      </p>
    </div>
    <!-- <div class="form-info">
      <h2 class="header">Contact Forms:</h2>
      <p class="txt">
      </p>
    </div> -->
    <div class="form">
      <h3 class="header">Form:</h3>
      <form
        action="https://formspree.io/f/mqkredbj"
        method="POST"
        class="personal-form"
      >
        <input type="text" placeholder="Full Name" name="Full Name" />
        <input type="text" placeholder="Email Address" name="Email Address" />
        <input id="" placeholder="Message" name="Message" />
        <button type="submit" data-submit>Submit</button>
      </form>
    </div>
    <img src="https://i.ibb.co/tQM2BfD/contact.jpg" alt="" />
    <div class="social-container">
      <h3 class="header">Social Platforms:</h3>
      <div class="icon-container">
        <a href="mailto:seth.adams1107@gmail.com" target="blank">
          <i class="fa-regular fa-envelope fa-2xl"></i>
        </a>
        <a href="tel:+0658879439" target="blank">
          <i class="fa-solid fa-square-phone fa-2xl"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/seth-tobias-0480b0294"
          target="blank"
        >
          <i class="fa-brands fa-linkedin fa-2xl"></i>
        </a>
        <a href="https://github.com/SethTobias" target="blank">
          <i class="fa-brands fa-github fa-2xl"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
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
  text-align: center;
}

.main-container {
  margin: 0 auto;
  margin-bottom: 25px;
  max-width: 1250px;
  width: auto;
  min-width: 250px;
  overflow: hidden;
  display: grid;
  grid:
    "intro intro img" 200px
    "form form img" 150px
    "social social social" 150px / 1fr 1fr 1fr;
}

.intro {
  grid-area: intro;
}

.form-info {
  grid-area: form-info;
}

.form {
  grid-area: form;
}

:is(.form) form {
  display: flex;
  place-content: center space-evenly;
  text-align: center;
}

:is(form) :where(input, button) {
  background-color: var(--primary);
  color: var(--secondary);
  border: 5px groove var(--text);
  height: 30px;
}

:is(form) :where(input, button):hover {
  background-color: var(--primary);
  color: var(--secondary);
  border: 5px groove var(--secondary);
  height: 50px;
}

::placeholder {
  color: var(--secondary);
  text-align: center;
}

img {
  grid-area: img;
  max-width: 250px;
  width: auto;
  margin: 0 auto;
  border: 10px var(--text) groove;
}
img:hover {
  border: 10px var(--secondary) ridge;
}

.social-container {
  grid-area: social;
  max-height: 50px;
  height: 50px;
}

.icon-container {
  display: flex;
  place-content: center space-evenly;
}

.icon-container i {
  color: var(--secondary);
  transform: scale(1.5);
}

.icon-container i:hover {
  color: var(--primary);
  transform: scale(2);
  transition: all 0.75s ease-in-out;
}

:is(.intro, .form-info, .form, .social-container) :where(.header) {
  font-size: 2rem;
}
:is(.intro, .form-info) :where(.txt) {
  font-size: 1.25rem;
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
    text-align: center;
  }

  .main-container {
    width: 250px;
    margin: 0 auto;
    display: grid;
    grid:
      "intro" 250px
      "img" 280px
      "form" 250px
      "social" 250px / 250px;
    place-items: center;
  }

  .intro {
    grid-area: intro;
  }

  .form-info {
    grid-area: form-info;
  }

  .form {
    grid-area: form;
  }

  .personal-form {
    display: flex;
    flex-direction: column;
  }

  :is(.form) form {
    display: flex;
    place-content: center space-evenly;
    text-align: center;
  }

  img {
    grid-area: img;
    max-width: 200px;
    width: auto;
  }

  .icon-container {
    display: flex;
    place-content: center space-evenly;
  }

  .icon-container i {
    transform: scale(1.25);
  }

  .icon-container i:hover {
    transform: scale(1.5);
    transition: all 0.75s ease-in-out;
  }

  .social-container {
    margin: auto;
  }

  :is(.intro, .form-info, .form, .social-container) :where(.header) {
    font-size: 1.25rem;
  }
  :is(.intro, .form-info) :where(.txt) {
    font-size: 0.75rem;
  }
}
</style>
