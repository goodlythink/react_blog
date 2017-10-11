// (state, action) => state
export function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

export function posts(state = {}, action) {
    switch (action.type) {
        case 'LOAD_POSTS_PENDING':
            return {
                isRejected: false,
                data: null
            }
        case 'LOAD_POSTS_FULFILLED':
        return {
            isRejected: false,
            data: action.payload
        }
        case 'LOAD_POSTS_REJECT':
        return {
            isRejected: true,
            data: 'There is Error'
        }
        default:
            return state
    }
}