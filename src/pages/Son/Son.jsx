import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Son extends Component {
    render() {
        return (
            <div>
                这是接收的页面Son{this.props.count}

            </div>
        )
    }
}



const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps)(Son);
