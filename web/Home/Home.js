import React from 'react'
import { gql, graphql } from 'react-apollo'
import PostList from '../Posts/PostList'

class Home extends React.Component {
    render() {
        const { data: { viewer, error, loading } } = this.props
        
        if (error) {
            return (
                <div>Error!!</div>
            )
        }

        return (
            <div>
                <h1>Lastest Posts</h1>
                {loading && <div>Loading...</div>}
                {viewer && <PostList data={viewer.posts} />}
            </div>
        )
    }
}

const Container = graphql(gql`
    query{
        viewer{
            posts{
                id
                title
                description
            }
        }
    }
`)(Home)

export default Container