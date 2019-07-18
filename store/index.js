export const state = () => ({
  msg: 'msg in store/index.js state MODULE'
})

export const mutations = {
  reset_msg(state, param) {
    state.msg = param
  }
}
