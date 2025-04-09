const foo = async () => {
	console.log("Before await");

	const promiseValue = await new Promise(resolve => {
		setTimeout(() => resolve(5), 2000)
	});	

	console.log("After await", promiseValue);
};

foo(); // через 2 секунди виведеться в консоль  "After await" 5


const fetchUsers = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchUsers()
  .then(users => console.log(users));




  console.log("Before try...catch");

  try {
    const result = 10 / 0;
    console.log(result); // Цей рядок не виконається через помилку
  } catch (error) {
    // Обробимо помилку
    console.error(error.message);
  }
    console.log("After try...catch");


    // +++++++++++++++++++++++++++++++++++++++++++++++++++++ //


    // const fetchPosts = async() => {
    //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    //   console.log("Posts: ", response.data);
    // };

    // fetchPosts();


    //////////////////////////////////////////////////////////////////////

    //codepen

    const fetchPostsBtn = document.querySelector(".btn");
const postList = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    console.log(posts);
    
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  // Change the number of items in the group here
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=7"
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p>${body}</p>
        </li>`;
    })
    .join("");
  postList.innerHTML = markup;
}


/////////////////////////////////////////////////

// const fetchPosts = async() => {
// 	const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3");
// 	console.log("Posts: ", response.data);
// };
// fetchPosts();

/////////////////////////////////////////////////

//codepen

const fetchPostsBtn1 = document.querySelector(".btn1");
const postList1 = document.querySelector(".posts");

fetchPostsBtn.addEventListener("click", async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params = new URLSearchParams({
    _limit: 3,
    // Change the group number here
    _page: 3
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join("");
  postList.innerHTML = markup;
}

