import axios from 'axios'

const moduleGetPost = {
  namespaced: true,
  state: () => ({
    stateUser: '',
    newUser: '',
    buttonVal: ''
  }),
  mutations: {
    muttPost (state, muttPost){
      state.stateUser = muttPost.postData
    },
    muttAddUser (state, muttAddUser) {
      state.stateUser.data.push(muttAddUser.data)
    },
    muttPostUser (state, muttPostUser) {
      state.newUser = muttPostUser.postData
    },
    muttButton (state, muttButton) {
      state.buttonVal = muttButton
    }
  },
  actions: {
    async getUser({commit, dispatch}) {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('muttPost',{
          postData: res
        })
      } catch (error) {
        commit('muttPost',{
          postData: error
        })
      }
    },
    postState ({ commit, dispatch }, data) {
      axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: data,
        headers: {"Content-type": "application/json; charset=UTF-8"}
       })
      .then(res => {
        console.log(res);
        commit('muttPostUser',{
          postData: res
        })
        commit('muttButton',{
          buttonVal: false
        })
      }).catch(err => {
        console.log(err);
        commit('muttPostUser',{
          postData: err
        })
        commit('muttButton',{
          buttonVal: false
        })
      })
    },
    updateState ({ commit, dispatch }, data) {
      axios({
        method: 'PUT',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        data: data,
        headers: {"Content-type": "application/json; charset=UTF-8"}
       })
        .then(res => {
          console.log(res);
          commit('muttPostUser',{
            postData: res
          })
        }).catch(err => {
          console.log(err);
          commit('muttPostUser',{
            postData: err
        })
      })
    },
    removeState ({ commit, dispatch }) {
      axios({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1'
       })
        .then(res => {
          console.log(res);
          commit('muttPostUser',{
            postData: res
          })
        }).catch(err => {
          console.log(err);
          commit('muttPostUser',{
            postData: err
        })
      })
    }
  },
  getters: {
    getUserList: state => {
      const data = state.stateUser.data

      if (data == '') {
        return "loading"
      } else {
        return data
      }
    },
    getNewUser: state => {
      const data = state.newUser

      if (data == '') {
        return "loading"
      } else if (data.message == "Network Error") {
        return "Network Error"
      } else {
        return data.data
      }
    },
    getButtonVal: state => {
      const data = state.buttonVal.buttonVal
      return data
    },
    getHandleError: state => {
      const data = state.buttonVal.newUser

      if (data.status == 200 ) {
        return false
      }
    }
  }
}
export default moduleGetPost
