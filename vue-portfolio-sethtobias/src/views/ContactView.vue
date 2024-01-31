<template>

<div class="main-container">
<h2>Wanna Get In Touch? Here is How!</h2>
<p>
Either complete one of the below contact forms or follow one of the many
links to any of my social media pages. This includes my Email address and
telephone number.
</p>
<h3>Contact Forms:</h3>
<p>
Below you will find one of rwo contact forms. The first being for if you
would like to get a hold of me for any personal enquires, eg. Get advice
on how to build an awesome portfolio. The second being for more formal and
professional enquires, eg. Wanting to collaborate on a certain project.
</p>
<h4>Personal Form:</h4>
<div class="personal-form-container">
<form
action="https://formspree.io/f/mqkredbj"
method="POST"
class="personal-form"
>
<input type="text" placeholder="Full Name" name="Full Name" />
<input type="text" placeholder="Email Address" name="Email Address" />
<input id="" placeholder="Message" name="Message" />
<input type="submit" value="Submit" />
</form>
</div>

<h4>Enterprise/Cooperation Form:</h4>
<div class="enterprise-form-container">
<form
action="https://formspree.io/f/mleqgwnk"
method="POST"
class="enterprise-form"
>
<input
type="text"
placeholder="Enterprise Name"
name="Enterprise Name"
/>
<input
type="text"
placeholder="Enterprise Email"
name="Enterprise Email"
/>
<input id="" placeholder="Message" name="Message" />
<input type="submit" value="Submit" />
</form>
</div>

<h3>Social Platforms:</h3>
<div class="contact-social-container">
<a href="">
<i class="fa-regular fa-envelope fa-2xl"></i>
</a>
<a href="">
<i class="fa-solid fa-square-phone fa-2xl"></i>
</a>

<a href="">
<i class="fa-brands fa-linkedin fa-2xl"></i>
</a>
<a href="">
<i class="fa-brands fa-github fa-2xl"></i>
</a>
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

.personal-form,
.enterprise-form {
background-color: var(--primary);
border-radius: 100px;
max-width: 1250px;
width: 100%;
display: flex;
justify-content: space-around;
align-content: center;
padding: 10px 0;
}

p {
  max-width: 1250px;
min-width: 250px;
}

form .personal-form-container,
form .enterprise-form-container {
max-width: 1250px;
min-width: 250px;
margin: 0 auto;
}

input {
max-width: 250px;
width: 250px;
min-width: 200px;
height: 80px;
background-color: var(--secondary);
border: 5px solid var(--text);
border-radius: 50px;
}

[value="Submit"] {
max-width: 250px;
width: 250px;
min-width: 200px;
height: 80px;
background-color: var(--secondary);
border: 5px solid var(--text);
border-radius: 50px;
}

h2,
h3 {
font-size: 50px;
}

h4,
p {
font-size: 40px;
}

.contact-social-container {
max-width: 1250px;
width: 1200px;
min-width: 250px;
height: auto;
margin: 0 auto;
display: flex;
justify-content: space-around;
}

.contact-social-container i {
color: var(--secondary);
transform: scale(1.5);
}

.contact-social-container i:hover {
color: var(--primary);
transform: scale(2);
transition: all 0.2s ease-in-out;
}

@media screen and (width < 300px) {
 .personal-form,
.enterprise-form {
width: 300px;
border-radius: 50px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
}
}
</style>