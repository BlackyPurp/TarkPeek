<template>
  <router-link :to="{ path: `/content/${data.type}/${data.id}/${data._id}` }">
    <div class="card">
      <h2>{{ data.title }}</h2>
      <p class="timestamp">Zuletzt am {{ getTime }} bearbeitet</p>
      <p class="text">{{ abbrContent }}</p>
    </div>
  </router-link>
</template>

<script>
import { convertTime } from '../composables/convertTimestamp'

export default {
  name: 'ModulElement',
  props: {
    data: Object
  },
  computed: {
    abbrContent () {
      return `${this.data.content.substring(0, 400)}...`
    },
    getTime () {
      return convertTime(this.data.last_updated, true)
    }
  }
}
</script>

<style scoped>
a, a:hover {
  color: inherit;
  text-decoration: none;
}
.card {
  background-color: #fff;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
  padding: 2em;
  border-radius: 0.5em;
  margin-bottom: 2em;
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.01);
}
.card:active {
  transform: scale(0.97);
}
.text {
  font-weight: 500;
  margin-top: 0.7em;
  line-height: 1.5;
}
.timestamp {
  font-weight: 700;
  font-size: 0.9em;
  opacity: 0.4;
  margin-top: 0.5em;
}
</style>

