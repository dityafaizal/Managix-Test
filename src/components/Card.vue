<template lang="html">
  <div class="card">
    <div class="" v-if="showPost == false">
      No data
    </div>
    <div class="card__filled" v-else>
      <div class="card__section">
        <div class="card__id">
          <h5>State ID</h5>
          <p>{{showPost.userId}}</p>
        </div>
        <div class="card__right">
          <ul class="card__unlist">
            <li>
              <h5>Title</h5>
              <p>{{showPost.title}}</p>
            </li>
            <li>
              <h5>State</h5>
              <p>{{showPost.state}}</p>
            </li>
          </ul>
          <ul class="card__action">
            <li @click="callModal('edit')">Edit</li>
            <li @click="callModal('delete')">Delete</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <!-- use the modal component, pass in the prop -->
    <Modals v-if="showModal" @close="showModal = false" :propsModal="propsModal" :showPost="showPost" />
  </div>
</template>

<script>
import Modals from './Modals.vue'

export default {
  props: ['showPost'],
  components: {
    Modals
  },
  data() {
    return {
      showModal: false,
      propsModal: ''
    }
  },
  methods: {
    callModal(val) {
      this.showModal = true
      this.propsModal = val
    }
  }
}
</script>

<style lang="scss">
  .card {
    width: 100%;
    text-align: center;

    &__filled {
      color: $black;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    &__section {
      width: 70%;
      border: 1px solid $white;
      border-radius: 3px;
      display: flex;
      align-items: center;
    }
    &__action {
      width: 100%;
      color: $secondary;
      text-decoration: underline;
      list-style: none;
      padding: 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
    }
    &__id {
      width: 45%;
      height: 100%;
      background: $secondary;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__right {
      width: 100%;
    }
    &__unlist {
      height: 100%;
      padding: 0 0 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      li {
        width: 100%;
        text-align: left;
        list-style: none;
      }
    }
    h5 {
      font-size: 1.1em;
    }
    h5, p {
      margin: 3px 0;
    }
  }
</style>
