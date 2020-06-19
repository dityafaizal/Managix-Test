<template lang="html">
  <div class="done">
    <h1>Done</h1>
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
      if (data.state == "Done") {
        return data
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  .done {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
