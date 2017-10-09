import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <div>
                    <div>
                        We are pug lover community. All things pugs
                    </div>
                    <button onClick={this._handleClick}>Click {this.props.count}</button>
                </div>
            </div>
        )
    }

    _handleClick = () => {
        this.props.handleClick()
    }
}
function selector(state) {
    return {
        count: state.counter,
    }    
}

function mapDispatch(dispatch) {
    return {
        handleClick: () => {
            dispatch({ type: 'INCREMENT' })
        }
    }
}

export default connect(
    selector,
    mapDispatch,
)(About)