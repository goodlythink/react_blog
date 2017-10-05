import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div>Hi React 2</div>
        )
    }    
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)