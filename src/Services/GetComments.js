async function getComments(id) {
    const comments = await fetch(`http://localhost:3001/comments?post-id=${id}`);

    return await comments.json();
}

export default getComments;