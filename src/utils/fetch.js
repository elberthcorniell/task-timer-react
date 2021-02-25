const newFetch = (url, options = {}) => fetch(url, {
    ...options,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'Authorization': localStorage.getItem('token'),
        ...options?.headers,
    },
})
.then(res => res.json());

export default newFetch;