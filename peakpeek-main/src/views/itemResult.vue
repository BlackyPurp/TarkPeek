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
  // import { searchItem } from '@/api/tarkovdevapi.js';
  
  export default {
    data() {
      return {
        item: '',
      };
    },
 
    methods: {
      async fetchItemDetails() {
        try {
          // const itemId = this.$route.query.id;
          // Use another API call to get detailed item information based on itemId
          // Example: const itemDetails = await getItemDetails(itemId);
          // Set the itemDetails to this.item
        } catch (error) {
          console.error('Error fetching item details:', error);
        }
      },
    },   
    mounted() {
      this.fetchItemDetails();
    },
  };
  </script>
  
<style>
.land h1 {
  color: #fff;
  font-weight: 300;
  font-size: 4em;
}
  </style>
  