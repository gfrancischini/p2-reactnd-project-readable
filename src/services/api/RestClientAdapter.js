const api = "http://127.0.0.1:3001"

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
    'Accept': 'application/json',
    'Authorization': token
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

export const getComment = (id) => {
    return fetch(`${api}/comments/${id}`, { headers })
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

export const updateComment = (comment) => {
    const body = JSON.stringify(comment);

    return fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, body
    }).then(response => response.json());
};

export const deleteComment = (id) => {
    return fetch(`${api}/comments/${id}`, {
        method: 'DELETE', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
};





export const addPost = (post) => {
    const body = JSON.stringify(post);

    return fetch(`${api}/posts/`, {
        method: 'POST', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, body
    }).then(response => response.json());
};

export const updatePost = (post) => {
    const body = JSON.stringify(post);

    return fetch(`${api}/posts/${post.id}`, {
        method: 'PUT', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, body
    }).then(response => response.json());
};


export const votePost = (id, option) => {
    const body = JSON.stringify({ option });

    return fetch(`${api}/posts/${id}`, {
        method: 'POST', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, body
    }).then(response => response.json());
};

export const deletePost = (id) => {
    return fetch(`${api}/posts/${id}`, {
        method: 'DELETE', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
};


export const voteComment = (id, option) => {
    const body = JSON.stringify({ option });

    return fetch(`${api}/comments/${id}`, {
        method: 'POST', headers: {
            ...headers,
            'Content-Type': 'application/json'
        }, body
    }).then(response => response.json());
};



export const getAllCategories = () => {
    return fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories);
}