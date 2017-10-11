import React from 'react'
import { gql, graphql } from 'react-apollo'
import PostList from '../Posts/PostList'

class Home extends React.Component {
    render() {
        const { viewer, error, loading, loadMorePosts } = this.props

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
                <button onClick={loadMorePosts}>Load More</button>
            </div>
        )
    }
}

const QUERY = gql`
query AAA($offset: Int, $limit: Int) {
    viewer{
      name
      posts(offset:$offset, limit: $limit){
        id
        title
        description
      }
    }
  }
`
const Container = graphql(QUERY, {
    options(props) {
        return {
            variables: {
                offset: 0,
                limit: 10
            }
        }
    },
    props({ data: { loading, error, viewer, fetchMore } }) {
        return {
            loading,
            error,
            viewer,
            loadMorePosts() {
                return fetchMore({
                    variables: {
                        offset: viewer.posts.length
                    },
                    updateQuery: (previousResult, { fetchMoreResult }) => {
                        if(!fetchMoreResult) return previousResult
                        return {
                            ...previousResult,
                            viewer: {
                                ...previousResult.viewer,
                                posts: [
                                    ...previousResult.viewer.posts, 
                                    ...fetchMoreResult.viewer.posts,
                                ]
                            }
                        }
                    }
                })
            },
        }
    }
})(Home)
export default Container