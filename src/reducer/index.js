// 处理发送过来的action

const initState = {
    count: 0
}

// 拿到传递过来的数据
const reducer = (state = initState, action) => {
    console.log(state.count, action)
    switch (action.type) { 
        case "send_action":  //判断是否是需要执行的这个函数
            return { //返回结果 更新数据
                count: state.count + 1
            }
        default:
            return state;
    }
}

module.exports = {
    reducer
}