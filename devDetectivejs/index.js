const search=document.querySelector('.search-button');
let url="https://api.github.com/users/";
const input=document.querySelector('input');
const profileImg=document.querySelector('.image');
let name=document.querySelector('.name-heading');
let userName=document.querySelector('.username');
let bio=document.querySelector('.bio');
const repo=document.querySelector('.repo-no');
const followers=document.querySelector('.followers-no');
const following=document.querySelector('.following-no');

let loc=document.querySelector('.location');
const githubLink=document.querySelector('.github-link');
const twitter=document.querySelector('.twitter-username');
const company=document.querySelector('.company');

function renderData(data){
    profileImg.src=data.avatar_url;
    name.innerText=data.name
    userName.innerText="@"+data.login;
    bio.innerText=data.bio;
    repo.innerText=data.public_repos;
    followers.innerText=data.followers;
    following.innerText=data.following;
    loc.innerText=data.location;
    console.log(data.location);
    githubLink.innerText=data.html_url;
    twitter.innerText=data.twitter_username;
    company.innerText=data.company;

    if(data.location==null){
        loc.innerText="NULL";
    }
    if(data.twitter_username==null){
        twitter.innerText="NULL";
    }
    if(data.company==null){
        company.innerText="NULL";
    }
}

async function getuserInfo(username){
    const response=await fetch(`${url+username}`);
    const data=await response.json();
    if(data.message){
        // It means wrong request
    }
    else{
        renderData(data);
    }
    console.log(data);
}

getuserInfo("divyank100");

// Event Listener for button

search.addEventListener('click',()=>{
    if(input.value!==""){
        getuserInfo(input.value);
    }
    else{
        // It means a wrong request
    }
});

input.addEventListener('keydown',(e)=>{
    if(e.key=="Enter"){
        if(input.value!==""){
            getuserInfo(input.value);
        }
        else{
            // It means a wrong request
        }
    }
})
