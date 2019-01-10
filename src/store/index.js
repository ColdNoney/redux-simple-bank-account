import { reducer } from '../reducers'
import { createStore } from 'redux'

const initialState = {
  username: "Janny",
  totalAmount: 2500701
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
