fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    let posts = res.json();
    return posts;
  })
  .then((posts) => {
    getInfo(posts);
  });

function getInfo(posts) {
  for (let i = 0; i < posts.length; i++) {
    // Create Container

    let container = document.createElement("div");

    container.className = "container";

    // Create Post Div

    let postDiv = document.createElement("div");

    postDiv.className = "post";
    // create Head
    let head = document.createElement("div");

    head.className = "head";

    let userIdDiv = document.createElement("div");

    userIdDiv.className = "user-id";

    let headUserIdText = document.createTextNode(`User : ${posts[i].userId}`);

    userIdDiv.appendChild(headUserIdText);

    let postIdDiv = document.createElement("div");

    let headpostIdText = document.createTextNode(`Post : ${posts[i].id}`);

    postIdDiv.appendChild(headpostIdText);

    head.appendChild(userIdDiv);

    head.appendChild(postIdDiv);

    postDiv.appendChild(head);

    // Create Body

    let bodyDiv = document.createElement("div");

    bodyDiv.className = "body";

    let bodyTitle = document.createElement("div");

    bodyTitle.className = "title";

    let bodyTitleText = document.createTextNode(`Title : ${posts[i].title}`);

    bodyTitle.appendChild(bodyTitleText);

    bodyDiv.appendChild(bodyTitle);

    postDiv.appendChild(bodyDiv);

    // container.appendChild(bodyDiv);

    let bodyPostDiv = document.createElement("div");

    bodyPostDiv.className = "post-content";

    let bodyPostText = document.createTextNode(posts[i].body);

    bodyPostDiv.appendChild(bodyPostText);

    bodyDiv.appendChild(bodyPostDiv);

    postDiv.appendChild(bodyDiv);

    // container.appendChild(bodyDiv);

    container.appendChild(postDiv);

    document.body.appendChild(container);
  }
}
