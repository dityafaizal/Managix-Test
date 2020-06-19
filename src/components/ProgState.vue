<template lang="html">
  <div class="progress">
    <h1>On Progress</h1>
    <card :showPost="showPost" />
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  props: ['getUser'],
  components: {
    Card
  },
  computed: {
    showPost() {
      const data = this.getUser
      if (data.state == "Progress") {
        return data
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  .progress {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
