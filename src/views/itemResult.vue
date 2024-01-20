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
        </div>
        <div v-else-if="loaded && notfound">
          <p>Ur Item wasn't found.</p>
        </div>
        <div v-else-if="this.loaded && !notfound">
          <div class="itemSpace" >
            <div class="itemIcon">
              <img :src="imgUrl">
            </div>
            <div class="itemName">
              {{ $store.state.itmData.name }}
            </div>
            <div class="itemDesc">
              <div id="taskTrader">
                Task found at: {{ $store.state.itmData.usedInTasks[0].trader.name}}
              </div>
              <div id="taskName">
                Used in task: {{$store.state.itmData.usedInTasks[0].name}}
              </div>
              <div id="taskAmount">
                amount needed for task: {{this.amount}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      item: {},
      loaded: false,
      notfound: true,
      errors: [],
      amount: 0,
      imgUrl: ''
    };
  },

  methods: {
    async findItem(){
      if(this.$store.getters.getItmData){
        this.notfound = false;
        this.amount = await this.findAmount();

      }
    },
    async findAmount(){
      var test = this.$store.getters.getItmData;
      this.imgUrl = test.image8xLink;
      for(var i = 0; i < test.usedInTasks[0].objectives.length;i++){
        if(test.usedInTasks[0].objectives[i].item.name == test.name){
          const correctAmount = test.usedInTasks[0].objectives[i].count;
          this.loaded = true;
          return correctAmount;
        }
      }
    },
    ...mapState(['getItmData']),
  },
  components: {
  },
  created: function(){
    this.findItem()
  },
  mounted() {
  },
};
</script>

<style scoped>
.itemSpace {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100px 250px;
}
.itemSpace h2 {
  color: #000;
  font-weight: 300;
  font-size: 4em;
}
.itemIcon{
  height: 5px;
  width: 5px;
  grid-column: 2 / 2;
  grid-row: 1;
}
.itemName{
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align:center;
}

.itemDesc{
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

#taskTrader{
  grid-row: 1;
}
#taskName{
  grid-row: 2;
}
#taskAmount{
  grid-row: 3;
}
</style>
