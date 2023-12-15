const initValue = {}

export const useHandleAction = (state,action) => {
  switch(action){
    case 'add':
      return {...state,amount:state.amount+1,total:1,price:state.price}
    case 'minus':
      return {...state,amount:state.amount-1,total:-1,price:-state.price}
    case 'remove':
      return {...state,amount:0,total:-state.amount,price:-(state.amount*parseInt(state.price))}
    default:
      return {...state}
  }
}
