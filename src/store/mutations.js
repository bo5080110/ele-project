export default {
  RECEIVE_SELLER (state, {seller}) {
    state.seller = seller
  },

  RECEIVE_RATINGS (state, {ratings}) {
    state.ratings = ratings
  },

  RECEIVE_GOODS (state, {goods}) {
    state.goods = goods
  }
}
