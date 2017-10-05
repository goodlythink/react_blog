import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss';

class App extends React.Component {
    render() {
        return (
            <div>Hi React With HMRE</div>
        )
    }    
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)