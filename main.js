// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const likedPost=[];

const feed=document.querySelector(".posts-list");

for(let i = 0; i < posts.length; i++) {
    const listPost = document.getElementById('template-post').content.cloneNode(true);
    const post = posts[i];
    console.log(post);
    listPost.querySelector('.post__text').innerHTML = post.content;
    listPost.querySelector(".post-meta__author").innerHTML = post.author.name;
    listPost.querySelector(".post-meta__time").innerHTML = italianDate(post.created);
    listPost.querySelector(".post__image").innerHTML = `<img src =${post.media}>`
    if( post.author.image===null) {
        listPost.querySelector('.post-meta__icon').innerHTML= "LF";
    } else {
        listPost.querySelector('.profile-pic').setAttribute("src",`${post.author.image}`);
    }
    listPost.querySelector(".js-likes-counter").innerHTML = post.likes;

    const likeBtn = listPost.querySelector(".like-button.js-like-button");
    let likesCounter = listPost.querySelector(".likes__counter b");
    const postId = post.id;
    likeBtn.setAttribute('data-postid', post.id);
    
    likesCounter.innerHTML = post.likes;
    likeBtn.addEventListener("click", function(clickBtn){
        clickBtn.preventDefault();
        if ( likeBtn.classList.contains("like-button--liked") === false ) {
            likeBtn.classList.add("like-button--liked");
            likesCounter.innerHTML = post.likes + 1;
            likedPost.push(postId);
            console.log("Post id che ha ricevuto un like: "+postId)
        } else {
            likeBtn.classList.remove("like-button--liked");
            likesCounter.innerHTML = post.likes;
            console.log("Post id che ha perso un like: "+postId)
        }
    });

    feed.append(listPost);
}
 
function italianDate(date) {
    return date.split('-').reverse().join('/');
}


