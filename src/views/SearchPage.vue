<template>
  <div class="additional-padding">
    <div class="content default-content">
      <input class="main-search" v-on:keyup.enter="searchFunc" v-model="searchInput" type="text" placeholder="search for an item">
      <SearchItem v-for="result in searchResults" :key="result._id" :data="result" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import SearchItem from '../components/SearchItem.vue'
import {searchItem} from '../api/tarkovdevapi.js'
// import { config } from '../composables/config'

export default {
  data () {
    return {
      errors: [],
      searchQuery: '',
      searchInput: '',
      subject: '',
      modulwahl: 0,
      allModules: {},
      searchResults: []
    }
  },
  methods: {
    async searchFunc () {
      this.searchQuery = this.searchInput
      this.$router.push({ path: '/search', query: { q: this.searchInput } })
      var que = this.searchQuery;
      this.searchResults = searchItem(que)
    }
  }
}
</script>
<style scoped>
.choose-subject, .choose-modulwahl {
  min-height: calc(100vh - 66.97px - 8em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.choose-subject-wappen {
  margin-top: 2em;
  display: flex;
  gap: 4em;
}
.choose-subject-wappen button {
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.4s;
}
.choose-subject-wappen button:hover {
  transform: scale(1.1);
}
.choose-modulwahl h2 {
  margin-bottom: 1em;
}
.choose-modulwahl-section {
  text-align: left;
  width: 100%;
  margin-bottom: 4em;
}
.main-search {
  font-weight: 600;
  padding: calc(1.5em - 3px) calc(2em - 3px);
  border-radius: 0.3em;
  margin-bottom: 4em;
  width: 100%;
  color: #0D3661;
  background-color: #fff;
  /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */
  border: 3px solid var(--accent);
  transition: border-color 0.3s;
  box-sizing: border-box;
}
</style>
