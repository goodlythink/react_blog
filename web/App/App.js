import React from 'react'

import Header from '../Header/Header'
class App extends React.Component {
    render() {
        return (
            <div className="container">
               <Header/>
                <div className="content">
                    Content
                </div>
            </div>
        )
    }
}

export default App