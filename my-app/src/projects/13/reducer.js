export const reducer = (state,action) =>{
  switch(action.type){
    case 'INIT_ALL':
      return {...state,cart:action.payload}
    case 'REMOVE_ALL':
      return {...state,cart:[]}
    case 'REMOVE_SINGLE':
      return {...state,cart:state.cart.filter(item=>item.id!==action.payload)}
    case 'FETCH_TOTAL':
      let {amount,total} = state.cart.reduce((pre,cur)=>{
        const {amount,price} = cur
        const item_total = amount * parseInt(price)
        console.log(item_total)
        pre.total += item_total
        pre.amount += amount
        return pre
      },{
        amount:0,
        total:0
      })
      total = parseFloat(total.toFixed(2))
      return {...state,total,amount}
    case 'TOGGLE_AMOUNT':
      let new_cart = state.cart.map(item=>{
        if(item.id === action.payload.id){
          if(action.payload.toggle_status === 'ADD'){
            return {...item,amount:item.amount+1}
          }else{
            return {...item,amount:item.amount-1}
          }
        }
        return item
      }).filter(item=>item.amount !== 0)
      return {...state,cart:new_cart}
    default:
      return {...state}
    // throw new Error('no matching action type')

  }
}