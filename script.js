const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const listaPosts = document.getElementById('listaPosts');
const loading = document.getElementById('loading');
const mensagem = document.getElementById('mensagem');.
const btnCarregarPosts = document.getElementById('carregar-posts');

btnCarregarPosts.addEventListener('click', carregarPosts);

async function carregarPosts() {  
    loading.style.display = 'block';  
    listaPosts.innerHTML = '';
    mensagem.textContent = '';
    // Show loading indicator
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao carregar os posts.');
        }
        const posts = await response.json();
        //mostrarPosts(posts);
        console.log(posts);

    } catch (error) {
        mensagem.textContent = 'Erro ao carregar os posts.';
    } finally {
        // Hide loading indicator
        loading.style.display = 'none';
    }
}
function mostrarPosts(posts) {
    posts.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <div class="post-id">
            Post # ${post.id}
            </div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        listaPosts.appendChild(div);
    });
}