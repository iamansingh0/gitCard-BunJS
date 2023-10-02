import fetchUser from "./src/gitApi";

const inputField = document.getElementById('inputField')
const submitButton = document.getElementById('submitButton');
if (submitButton) {
    submitButton.addEventListener('click', async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const username = inputField.value;
        const userData = await fetchUser(username)
        const form = document.getElementById('form')
        form.style.display = 'none';
        const userDiv = document.getElementById('userDiv')
        userDiv.style.display = 'flex';
        document.getElementById('name').innerHTML = JSON.stringify(userData.name).replace(/\"/g, '')
        document.getElementById('username').innerHTML = '@' + JSON.stringify(userData.login).replace(/\"/g, '')
        const imgTag = document.getElementById('userImg')
        imgTag.src = userData.avatar_url

        // bio
        if (userData.bio !== null) {
            document.getElementById('bio').innerHTML = JSON.stringify(userData.bio)
        }
        // followers
        document.getElementById('followers').innerHTML = userData.followers
        document.getElementById('following').innerHTML = userData.following
        document.getElementById('repos').innerHTML = userData.public_repos;

        // profile link
        document.getElementById('profile').href = userData.html_url
    })
}