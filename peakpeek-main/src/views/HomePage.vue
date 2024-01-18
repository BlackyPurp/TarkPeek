<template>
  <div class="home">
    <div class="content">
      <div class="landing">
        <h1>TarkPeek</h1>
        <h3>The fast and easy to use Tarkv Item Search Engine.</h3>
        <input autofocus class="main-search" v-on:keyup.enter="searchFunc" v-model="searchInput" type="text" placeholder="Type in a Item">
      </div>
    </div>
  </div>
</template>

<script>
import { searchItem } from '../api/tarkovdevapi.js'

export default {
  data () {
    return {
      searchInput: '',
    }
  },
  methods: {
    async searchFunc () {
      this.searchQuery = this.searchInput
      var que = this.searchQuery;
      var itm = await searchItem(que);
      console.log(itm.items)
      if(itm.items.length === 0){
        this.$router.push({ path: '/failed', query: {q: this.searchInput} })
      }
      if(itm.items.length > 1){
        this.$router.push({ path: '/results', query: {q: this.searchInput} })
      }
      if(itm.items.length === 1){
        this.$router.push({ path: '/itemResult', query: { q: this.searchInput } })
      }
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #222;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('~@/assets/bg.jpg');
  height: 100vh;
}
.content {
  height: 100%;
}
.landing {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.landing h1 {
  color: #fff;
  font-weight: 300;
  font-size: 4em;
}
.landing h3{
  color: #fff;
  font-weight: 100;
  font-size: 4em;
}
.main-search {
  font-weight: 600;
  padding: 1.5em 2em;
  border-radius: 0.3em;
  margin-top: 2em;
  width: 500px;
  max-width: 80%;
  color: #0D3661;
}
.add-btn {
  background-color: var(--accent);
  background-image: url('~@/assets/add.svg');
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  left: 50%;
  right: 50%;
  bottom: 0;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
}
.add-btn:hover {
  transform: translate(-50%, -55%);
}
.add-btn:active {
  transform: translate(-50%, -40%);
}
</style>
