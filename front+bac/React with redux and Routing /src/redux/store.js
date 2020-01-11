import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import BottlesReducer from './BottlesReducer'

const store = createStore(
BottlesReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store