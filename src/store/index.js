import { createStore } from 'redux'
// 导入我们自己的reducer处理函数
import { reducer } from '../reducer'

// 构建store
const store = createStore(reducer)

export default store;