// 存储的入口

import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexRedux from './index'

const reducer = combineReducers({
  index: indexRedux
})

// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))


// export default store
export const getClientStore = ()=>{
  return createStore(reducer, applyMiddleware(thunk))
}

export const getServerStore = ()=>{
  // 通过window.__context来获取数据
  const defaultState = window.__context ? window.__context: {}
  return createStore(reducer, applyMiddleware(thunk))
}