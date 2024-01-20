<template>
  <nav id="nav">
    <div class="nav-inner">
      <div class="nav-itembox">
        <router-link class="nav-item" :to="{ name: 'SearchPage' }">Search</router-link>
      </div>
      <div class="nav-itembox nav-home">
        <router-link class="nav-item" :to="{ name: 'HomePage' }">Main Page</router-link>
      </div>
      <div class="nav-itembox">
        <a class="nav-item" href="https://github.com/BlackyPurp/TarkPeek" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </nav>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component"></component>
    </transition>
  </router-view>

  <footer v-if="hasFooter">
    <div class="footer-content">
      <div class="footer-left">
        <h3>Developed by BlackyPurp</h3>
        <h3>Special thanks to the Tarkov.api team and SparxDev</h3>
      </div>
      <div class="footer-right">
        <h3>Open-Source Projekt of BlackyPurp</h3>
        <h3 class="middle">Get the Project: <a href="https://github.com/BlackyPurp/TarkPeek" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
        <h3>GPL-3.0 license</h3>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'App',
  computed: {
    hasFooter () {
      if (this.$route.path == '/') return false
      else return true
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');

:root {
  --font: 'Montserrat', sans-serif;
  --accent: #0D3661;
  --error: #e74c3c;
  --warning: #f1c40f;
  --success: #2ecc71;
}

html, body, h1, h2, h3, h4, h5, h6, p { margin: 0; scroll-behavior: smooth; }
* { box-sizing: border-box; }
#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsl(210, 25%, 17%);
  background-color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.loading-center {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid var(--accent);
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation-name: loading;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
a {
  text-decoration: underline;
  color: var(--accent);
  transition: color 0.3s;
}
a:visited {
  text-decoration: dotted;
}
.default-content {
  margin: auto;
  padding-left: 2em;
  padding-right: 2em;
  max-width: calc(1000px + 4em);
}
.additional-padding {
  padding: 4em 0;
}
input, button {
  font-family: var(--font);
  font-size: 100%;
  border: 0;
  outline: 0;
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: black;
  transition: background-color 0.3s;
}
.nav-inner {
  display: flex;
  margin: auto;
  max-width: 1000px;
}
.nav-itembox {
  width: 100%;
  text-align: center;
  padding: 1.2em;
}
.nav-item {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding: 0.3em;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-left: 3px;
  opacity: 0.8;
  font-weight: 500;
  transition: margin-left 0.3s, letter-spacing 0.3s, opacity 0.3s;
}
.nav-item:hover {
  letter-spacing: 5px;
  margin-left: 5px;
  opacity: 1;
}
.content {
  padding-top: 66.97px;
}
footer {
  width: 100%;
  background-color: black;
  transition: background-color 0.3s;
  color: #fff;
  position: fixed;
  bottom: 0;
}
footer a {
  color: #fff;
}
footer h3 {
  font-weight: 300;
}
.footer-content {
  padding: 4em 2em;
  margin: auto;
  max-width: calc(1000px + 4em);
  display: flex;
  align-items: stretch;
}
.footer-left, .footer-right {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.clear-selection {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  bottom: 0;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 10em;
  margin: 1em;
  cursor: pointer;
}
.btn {
  background-color: var(--accent);
  padding: 0.8em 1.5em 0.8em calc(1.5em + 1px);
  color: #fff;
  border-radius: 0.3em;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  transition: transform 0.2s;
}
.btn.secondary {
  background-color: #ddd;
  color: inherit;
}
.btn:hover {
  transform: translateY(-2px);
}
@keyframes loading {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
