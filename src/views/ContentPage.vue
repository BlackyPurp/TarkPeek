<template>
  <div class="additional-padding">
    <div class="content default-content">
      <div v-if="!loaded" class="loading-center">
        <div class="loader"></div>
      </div>
      <div v-else>
        <div class="back-btn-container">
          <button class="back-btn" @click="$router.go(-1)"></button>
        </div>
        <div v-if="errors.length > 0">
          <InfoBox msg="Da ist was schief gelaufen..." type="error" />
          <ServerErrorSvg :color="retrieveAccent" class="errorsvg" />
        </div>
        <div v-else-if="loaded && notfound">
          <InfoBox msg="Diese Seite konnte nicht gefunden werden" type="warning" />
          <NotFoundSvg :color="retrieveAccent" class="errorsvg" />
        </div>
        <div v-else-if="loaded && !notfound">
          <p class="module-info">{{ contentResult.moduleInfo.name }}</p>
        </div>
      </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
  </div>
</template>

<script>
import axios from 'axios'
import InfoBox from '../components/InfoBox.vue'
import NotFoundSvg from '../components/NotFoundSvg.vue'
import ServerErrorSvg from '../components/ServerErrorSvg.vue'
import { config } from '../composables/config'

export default {
  data () {
    return {
      historyLink: '/search',
      errors: [],
      contentResult: {
        _id: null,
        title: '',
        content: '',
        type: '',
        id: 0,
        last_updated: null,
        moduleInfo: {}
      },
      allModules: {},
      notfound: false,
      loaded: false,
      editState: false
    }
  },
  components: {
    InfoBox,
    NotFoundSvg,
    ServerErrorSvg,
  },
  methods: {
    async contentRequest () {
      try {
        const res = await axios.get(`${config.baseUrl}/content/get/${this.$route.params.subject}/${this.$route.params.id}/${this.$route.params.object}`)
        if (!res.data.result) {
          this.notfound = true
          this.loaded = true
          return;
        }

        this.contentResult._id = res.data.result._id
        this.contentResult.title = res.data.result.title
        this.contentResult.content = res.data.result.content
        this.contentResult.type = res.data.result.type
        this.contentResult.id = res.data.result.id
        this.contentResult.last_updated = res.data.result.last_updated
        this.contentResult.moduleInfo = res.data.moduleInfo
        this.loaded = true
      } catch (e) {
        this.errors.push(e)
        this.loaded = true
        console.error(e)
        console.log(this.errors)
      }
    },
    startEditing () {
      //this.$router.push({ name: 'ContentEditPage' })
      this.editState = true
    },
    async editContent () {
      console.log('yea')
    }
  },
  computed: {
    retrieveAccent () {
      return document.querySelector(':root').style.getPropertyValue('--accent')
    }
  },
  mounted() {
    this.contentRequest()
  }
}
</script>

<style scoped>
.errorsvg {
  margin: auto;
  max-width: 50%;
  margin-top: 4em;
}
.page-document-title {
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3em;
  margin-bottom: 0.5em;
}
.module-info {
  background-color: #ddd;
  padding: 0.5em 1em;
  border-radius: 10em;
  display: inline-block;
  font-weight: 700;
  font-size: 0.9em;
  opacity: 0.7;
  margin-bottom: 1em;
}
.page-content {
  position: relative;
  margin-bottom: 8em;
}
.back-btn-container {
  position: relative;
}
.back-btn {
  background-color: #ddd;
  background-image: url('~@/assets/back.svg');
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  width: 45px;
  height: 32.38px;
  border-radius: 0.3em;
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(calc(-100% - 0.7em));
  cursor: pointer;
}
#edit-btn {
  background-color: var(--accent);
  background-image: url('~@/assets/edit.svg');
  background-size: 40%;
  background-position: center;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  transform: translateY(calc(100% + 2em));
  transition: transform 0.2s;
}
#edit-btn:hover {
  transform: translateY(calc(100% + 2em)) rotate(10deg);
}
</style>
