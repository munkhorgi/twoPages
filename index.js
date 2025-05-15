const url = 'https://dummyjson.com/users'

async function title( ){
  const res = await fetch(url);
  const data = await res.json();
  const users = data.users;
  document.title = `All users ${users.length}`
}
title()

async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
    } catch (error) {
    console.error(error.message);
    }
}

async function createDiv() {
  let data = await getData()
  const users = data.users;
  let display = document.getElementById('bigDiv')
  console.log(display)
  for(let i = 0; users.length !== i; i++) {
    let username = [users[i].username]
    let age = [users[i].age];
    let gender = [users[i].gender];
    let email = [users[i].email];
    let img = [users[i].image];
    // Create main link element

    let jump = document.createElement('a');
    let user =
    `<a href="http://127.0.0.1:5500/twoPages/contant.html?id=${users[i].id}" id="a">
      <ul id="ul">
        <li id="li">Name: ${username}</li>
        <li id="li">Age: ${age}</li>
        <li id="li">Gender: ${gender}</li>
        <li id="li">Email: ${email}</li>
      </ul>
      <div id="div">
        <img src=${img} id="user-image-container" />
      </div>
    </a>`
    jump.setAttribute('href', `http://127.0.0.1:5500/twoPages/contant.html?id=${users[i].id}`);
    let div = document.createElement('div');
    div.setAttribute("id", "users");
    div.innerHTML = user;
    display.appendChild(div);
  }

  let searchInput = document.createElement('input');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search by username or ID');
  searchInput.setAttribute('id', 'search')
  document.body.insertBefore(searchInput, document.body.firstChild);

  searchInput.addEventListener('input', async function() {
    let searchTerm = this.value.toLowerCase();
    let allDivs = document.querySelectorAll('#users');
    const response = await fetch(url);
    const data = await response.json();
    const users = data.users;
    allDivs.forEach((div, index) => {
      if (index < users.length) {
        let username = users[index].username.toLowerCase();
        let id = users[index].id.toString();
        if (username.includes(searchTerm) || id.includes(searchTerm)) {
          div.style.display = 'flex';
        } else {
          div.style.display = 'none';
        }
      }
    });
  });
}
createDiv()