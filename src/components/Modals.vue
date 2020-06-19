<template lang="html">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <!-- Edit State -->
        <div class="modal-container" v-if="handleEditDel">
          <button class="loading" v-if="showLoader">send</button>
          <div class="modal-header" v-if="!showLoader">
            <slot name="header">
              <h3>Update State</h3>
            </slot>
          </div>
          <div class="form_section" v-if="!showLoader">
            <ul class="form__unlist">
              <li>
                <label for="name">Title</label>
                <input
                  id="title"
                  v-model="title"
                  type="text"
                  name="title"
                >
              </li>
              <li>
                <label for="age">State</label>
                <div class="select">
                  <select
                    id="state"
                    v-model="state"
                    name="state"
                  >
                    <option>Open</option>
                    <option>Progress</option>
                    <option>Done</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer" v-if="!showLoader">
            <div class="btn" @click="$emit('close')">
              Cancel
            </div>
            <div class="btn md confirm" @click="updateState">Update</div>
          </div>
        </div>
        <!-- Edit State End -->

        <!-- Delete State -->
        <div class="modal-container" v-if="!handleEditDel">
          <button class="loading" v-if="showLoader">send</button>
          <div class="form_section" v-if="!showLoader">
            <h3>Are you sure want to remove this state?</h3>
          </div>

          <div class="modal-footer" v-if="!showLoader">
            <div class="btn" @click="$emit('close')">
              Cancel
            </div>
            <div class="btn md confirm" @click="removeState">Remove</div>
          </div>
        </div>
        <!-- Delete State End -->
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['propsModal', 'showPost'],
  data() {
    return {
      errors: [],
      title: this.showPost.title,
      state: this.showPost.state,
      userId: 1,
      showLoader: false
    }
  },
  computed: {
    ...mapState('moduleGetPost', {
      getStateUser: 'newUser'
    }),
    handleEditDel() {
      if (this.propsModal == "edit") {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    updateState() {
      const data = JSON.stringify({
        title: this.title,
        state: this.state,
        userId: this.userId
      })
      this.$store.dispatch('moduleGetPost/updateState', data)
      this.showLoader = true
    },
    removeState() {
      this.$store.dispatch('moduleGetPost/removeState')
      this.showLoader = true
    }
  },
  watch: {
    getStateUser(val) {
      if (!val) {
        return false
      }

      if (val.status == 200 ) {
        this.showLoader = false
        this.$emit('close')
      } else {
        this.showLoader = false
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form__unlist li input {
  margin: 5px 10px;
  width: 61%;
}
.select select {
  width: 91%;
  background: #fff;
  border: .5px solid #ccc;
}
</style>
