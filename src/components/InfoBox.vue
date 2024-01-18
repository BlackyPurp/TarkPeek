<template>
  <div class="box" :class="getValidClass">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    type: String,
    msg: String
  },
  computed: {
    getValidClass () {
      return {
        error: this.type == 'error',
        info: this.type == 'info',
        warning: this.type == 'warning',
        success: this.type == 'success'
      }
    }
  }
}
</script>

<style scoped>
.box {
  font-weight: 600;
  padding: 1.5em 2em;
  border-radius: 0.3em;
  width: 100%;
  background-color: #eee;
}
.error {
  background-color: var(--error);
  color: #fff;
}
.warning {
  background-color: var(--warning);
  color: #fff;
}
.success {
  background-color: var(--success);
  color: #fff;
}
.info {
  background-color: var(--accent);
  transition: background-color 0.3s;
  color: #fff;
}
</style>
