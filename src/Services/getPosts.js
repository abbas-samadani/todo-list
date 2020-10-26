async function getPosts() {
    const posts = await fetch('http://localhost:3001/posts');

    return await posts.json();
}

export default getPosts;