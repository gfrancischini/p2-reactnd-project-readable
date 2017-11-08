
const api = "http://127.0.0.1:3001"


const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

//TODO make it a rest client adapter
class RestClientAdapter {
    headers = null;

    constructor() {
        // Generate a unique token as the Authorization
        let token = localStorage.token
        if (!token)
            token = localStorage.token = Math.random().toString(36).substr(-8)

        const headers = {
            'Accept': 'application/json',
            'Authorization': token
        }

    }

}


export const getAll = () => {
    console.log("getAll");
    return fetch(`${api}/posts`, { headers })
        .then(res => res.json())
}


export const getPost = (postId) =>
fetch(`${api}/posts/${postId}`, { headers })
  .then(res => res.json())

export const getAllCommentsFromPost = (post) =>
    fetch(`${api}/posts/${post.id}/comments`, { headers })
        .then(res => res.json())

export const addComment = (comment) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...comment })
    }).then(res => res.json())