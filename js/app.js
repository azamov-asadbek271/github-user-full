let input = document.querySelector(".input")
const btn = document.querySelector(".btn-search");
const userImg = document.querySelector(".user_image");

btn.addEventListener("click",(e) => {
    e.preventDefault()
 const url = `https://api.github.com/users/${input.value}`;
 const getUrl = async() => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    const { avatar_url, bio, followers, following,name} = data;
    userImg.src = avatar_url
 }
 getUrl()
})