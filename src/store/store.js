// 存储的入口

import { createStore, appliMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexRedux from './index'

const reducer = combineReducers({
  index: indexRedux
})

const store = createStore(reducer, appliMiddleware(thunk))

export default store