const initState = {
    posts: [
        {id: "1", title: "ABC", body: "abc"},
        {id: "2", title: "XYZ", body: "xyz"},
        {id: "3", title: "123", body: "123."}
    ]
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'DELETE_POST')
    {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;