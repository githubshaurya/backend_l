require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata = {
    "login": "githubshaurya",
    "id": 145922953,
    "node_id": "U_kgDOCLKbiQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/145922953?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/githubshaurya",
    "html_url": "https://github.com/githubshaurya",
    "followers_url": "https://api.github.com/users/githubshaurya/followers",
    "following_url": "https://api.github.com/users/githubshaurya/following{/other_user}",
    "gists_url": "https://api.github.com/users/githubshaurya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/githubshaurya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/githubshaurya/subscriptions",
    "organizations_url": "https://api.github.com/users/githubshaurya/orgs",
    "repos_url": "https://api.github.com/users/githubshaurya/repos",
    "events_url": "https://api.github.com/users/githubshaurya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/githubshaurya/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Shaurya Omar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "IIT Roorkee \r\nB. Tech. 2027",
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 18,
    "following": 21,
    "created_at": "2023-09-24T16:06:35Z",
    "updated_at": "2025-03-17T05:10:53Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("Twitter.com")
})

app.get('/login', (req, res) => {
    res.send('<h1>please login</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>please login at youtube</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})