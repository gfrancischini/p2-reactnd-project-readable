
const api = "http://127.0.0.1:3001"

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
    'Accept': 'application/json',
    'Authorization': token
}


//TODO make it a rest client adapter
class RestClientAdapter {
    headers = null;

    constructor() {
        // Generate a unique token as the Authorization
        let token = localStorage.token
        if (!token)
            token = localStorage.token = Math.random().toString(36).substr(-8)

        this.headers = {
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

export const getAllCommentsFromPost = (postId) => {
    console.log("getAllCommentsFromPost=" + postId);
    return fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json())
}

export const addComment = (comment) => {
    const body = JSON.stringify({ ...comment })
    return fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body
    }).then(res => res.json());
}

export const addPost = (post) => {
    const body = JSON.stringify(post);

    return fetch(`${api}/posts/`, {
        method: 'POST', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, body
    }).then(response => response.json());
};
