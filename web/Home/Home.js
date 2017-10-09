import React from 'react'
import PostList from '../Posts/PostList'

class Home extends React.Component {
    state = { data: null, isLoading: false }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
            .then(d => d.json())
            .then(d => this.setState({ data: d, isLoading: false }))
    }
    render() {
        const { isLoading, data } = this.state

        return (
            <div>
                <h1>Lastest Posts</h1>
                {isLoading && <div>Loading...</div>}
                <PostList data={data}/>
            </div>
        )
    }
}

export default Home