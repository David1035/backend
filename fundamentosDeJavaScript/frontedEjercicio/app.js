const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('#posts-container')

function sendHTTPRequest(method, url, data) {
    return fetch(url,{
        method: method,
        body: JSON.stringify(data), // convierte el tipo de datos a JSON
        headers: {
            "Content-Type": "application/json",
        },

    }).then((response) => {
        return response.json()
    })
}

async function fetchPosts() {
    const respondeData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    console.log(respondeData)
    const listOfPosts = respondeData;
    for(const post of listOfPosts){
        const postContainer = document.createElement('article');
        postContainer.id = post.id;
        postContainer.classList.add('post-item');

        const title = document.createElement('h2');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        const button = document.createElement('button');
        button.textContent = 'DELETE Content';

        postContainer.append(title)
        postContainer.append(body)
        postContainer.append(button)

        listElement.append(postContainer)
    }
}

fetchButton.addEventListener('click', fetchPosts)

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    };
    sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts',post)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = event.currentTarget.querySelector('#title').value
    const contect = event.currentTarget.querySelector('#content').value

    console.log(title, contect)
    createPost(title, contect)
})