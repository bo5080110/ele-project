export default {
  foods(state){
    const foods = []
    state.goods.forEach(good => {
      good.foods.forEach(food => {
        if(food.count>0) {
          foods.push(food)
        }
      })
    })
    return foods
  }
}
