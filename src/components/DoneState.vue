<template lang="html">
  <div class="done">
    <h1>Done</h1>
    <card :showPost="showPost" />
  </div>
</template>

<script>

import { computed } from 'vue'
import Card from './Card.vue'

export default {
  props: ['getUser'],
  components: {
    Card
  },
  setup(props) {
    const showPost = computed(function() {
      const data = props.getUser
      if (data.state == "Done") {
        return data
      } else {
        return false
      }
    });

    return {
      showPost
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
