let input = document.querySelector(".input")
const btn = document.querySelector(".btn-search");
const userImg = document.querySelector(".user_image");
const NameTitle = document.querySelector(".user_title");
const userDate = document.querySelector(".user_date");
const userName = document.querySelector(".user_username");
const userDec = document.querySelector(".user_description");
const userRepos = document.querySelector(".repos");
const userFollowiers = document.querySelector(".followiers");
const userlocation = document.querySelector(".location");
const twitter = document.querySelector(".twitter");
const github = document.querySelector(".github");
const git = document.querySelector(".git");
const userFollowing = document.querySelector(".user_following");
const error = document.querySelector("#error");


btn.addEventListener("click",(e) => {
    e.preventDefault()
 const url = `https://api.github.com/users/${input.value}`;
 const getUrl = async() => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

   if(data.message != "Not Found") {
       const {
         avatar_url,
         bio,
         followers,
         following,
         name,
         login,
         created_at,
         public_repos,
         location,
         url,
         html_url,
         twitter_username,
       } = data;
       const DataDeta = created_at.slice(0,created_at.length - 10)
       userImg.src = avatar_url
       NameTitle.innerHTML = name
       userDate.innerHTML = `Joined  ${DataDeta}`;
       userName.innerHTML = login
       userDec.innerHTML = bio === "" || bio === null ? "This profile has no bio" : bio
       userFollowiers.innerHTML = followers
         error.classList.add("hidden");
       input.value = ""
       userFollowing.innerHTML = following
       userRepos.innerHTML = public_repos
       userlocation.innerHTML = location === "" || location === null ? "No Location" : location
       twitter.innerHTML = twitter_username === "" || twitter_username === null ? "No Twitter" : twitter_username
       github.innerHTML = url === "" || url === null ? "No Location" : url;
       git.innerHTML = html_url === "" || html_url === null ? "No Location" : html_url;

   } else {
         error.classList.remove("hidden")
   }
 }
 getUrl()
})

