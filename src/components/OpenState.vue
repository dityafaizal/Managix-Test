<template lang="html">
  <div class="open">
    <h1>Open</h1>
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
      if (data.state == "Open") {
        return data
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  .open {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
