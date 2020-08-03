<template>
  <div id="app">
    <h1>State Management</h1>
    <Form />
    <div class="errorMess" v-if="checkError">
      {{getUser}} <br>
      <span>Please try again in a few minutes</span>
    </div>
    <div class="state__section">
      <OpenState :getUser="getUser" />
      <ProgState :getUser="getUser" />
      <DoneState :getUser="getUser" />
    </div>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import OpenState from './components/OpenState.vue'
import ProgState from './components/ProgState.vue'
import DoneState from './components/DoneState.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Form,
    OpenState,
    ProgState,
    DoneState
  },
  created() {
    fbq('track', 'PageView');
    console.log(fbq);
  },
  computed: {
    ...mapGetters('moduleGetPost', {
      getUser: 'getNewUser'
    }),
    checkError(val) {
      if (this.getUser == "Network Error") {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~@/assets/styles/Base.scss';

  #app {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .state {

    &__section {
      width: 100%;
      margin: 30px 0 0;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
</style>
