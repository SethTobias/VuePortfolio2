<template>
  <footer>
    <p>Developed by Seth Tobias</p>
    <p>Copy Rights Reserved</p>
    <p>
      <span class="currentYear">{{ getCurrentYear() }}</span>
    </p>
    <div class="end-icons">
      <i class="fa-brands fa-github fa-2xl"></i>
      <i class="fa-brands fa-linkedin fa-2xl"></i>
      <i class="fa-solid fa-fire fa-2xl"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  methods: {
    getCurrentYear() {
      const currentYear = new Date().getFullYear();
      return currentYear;
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

footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: fit-content;
  background-color: var(--background);
  position: absolute;
  left: 0;
  margin-top: 15px;
}

p {
  justify-self: center;
  color: var(--text);
  font-size: 20px;
  display: flex;
  flex-flow: column;
  align-content: center;
  text-align: center;
  line-height: 0rem;
}

.end-icons {
  justify-self: end;
  align-self: center;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-content: space-between;
  text-align: center;
  width: 20%;
  color: var(--text);
  
}
</style>
