export const reducer = (state, action) => {
  switch (action.type) {
    case "WITHDRAW":
      return {
        ...state,
        totalAmount: state.totalAmount - action.amount,
      }
    default:
      return state
  }
}
