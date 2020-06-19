<template lang="html">
  <div class="form__section">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="(error, i) in errors" :key="i">{{ error }}</li>
        </ul>
      </p>
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
      <button type="submit" :class="{loading: getButtonVal}" @click="submitData">Submit</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      errors: [],
      title: null,
      state: null,
      userId: 1
    }
  },
  computed: {
    ...mapGetters('moduleGetPost', {
      getButtonVal: 'getButtonVal'
    })
  },
  methods:{
    submitData(e) {
      if (this.title && this.state && this.userId) {
        const data = JSON.stringify({
          title: this.title,
          state: this.state,
          userId: this.userId
        })
        const buttonVal = {
          buttonVal: true
        }
        this.$store.dispatch('moduleGetPost/postState', data)
        this.$store.commit('moduleGetPost/muttButton', buttonVal)
        this.errors = []
        this.title = null
        this.state = null
        return true;
      }

      this.errors = [];

      if (!this.title) {
        this.errors.push('Title required.');
      }
      if (!this.state) {
        this.errors.push('State required.');
      }

      e.preventDefault();
    }
  }
}
</script>

<style lang="scss">
  .form {

    &__section {
      width: max-content;
      padding: 10px 15px;
      border: 1px solid #eee;
      border-radius: 3px;
      display: flex;
      flex-direction: column;
    }
    &__unlist {
      width: 100%;
      padding: 0;
      display: flex;
      flex-direction: column;

      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
          padding: 0 10px;
        }
        input {
          margin: 5px 10px;
        }
      }
    }
  }

  .select {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    width: 70%;

    select {
      display: inline-block;
      width: 93%;
      cursor: pointer;
      padding: 4px 0;
      outline: 0;
      border: 0;
      border-radius: 0;
      background: $white;
      color: $black;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
      &::-ms-expand {
        display: none;
      }
      &:disabled{
        opacity: 0.5;
        pointer-events: none;
      }
  }
  .select__arrow {
    position: absolute;
    top: 16px;
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0 5px;
    border-color: $black transparent transparent transparent;

    .select select:hover ~ &
    .select select:focus ~ & {
      // border-top-color $color--black
    }

    .select select:disabled ~ & {
      // border-top-color $color--grey
    }
  }
</style>
