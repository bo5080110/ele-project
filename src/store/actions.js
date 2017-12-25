import {
  requestGoods,
  requestRatings,
  requestSeller
} from '../api'
export default {
  requestSeller({commit}) {
    requestSeller().then(response => {
      const result = response.data  // {code:0, data: seller}
      if(result.code===0) {
        const seller = result.data
        commit("RECEIVE_SELLER", {seller})
      }
    })
  },

  requestRatings({commit}) {
    requestRatings().then(response => {
      const result = response.data  // {code:0, data: ratings}
      if(result.code===0) {
        const ratings = result.data
        commit("RECEIVE_RATINGS", {ratings})
      }
    })
  },

  requestGoods({commit}, cb) {
    requestGoods().then(response => {
      const result = response.data  // {code:0, data: goods}
      if(result.code===0) {
        const goods = result.data
        commit("RECEIVE_GOODS", {goods})
        cb && cb()
      }
    })
  }
}
