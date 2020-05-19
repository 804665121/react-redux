import React, { Component } from 'react'

import { connect } from 'react-redux'

export class Father extends Component {


    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {

        }
    }
    addCount = () => {
      this.props.sendAction()

    }
    render() {
        return (
            <div>
                这是发送的页面Father
                <button onClick={this.addCount}>点击修改</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
              type:'send_action'
            })
        }

    }
}

export default connect(null, mapDispatchToProps)(Father);