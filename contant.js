const val = window.location.search;
const urlParams = new URLSearchParams(val);
const param = urlParams.get('id');
const url = `https://dummyjson.com/users/${param}`;

async function createDiv() {
    const res = await fetch(url);
    const data = await res.json();

    let address = data.address;
    let bank = data.bank;
    let birthDate = data.birthDate;
    let height = data.height;
    let phone = data.phone;
    let university = data.university;
    let company = data.company;
    let image = data.image

    let div = document.createElement('div');
    div.setAttribute('id', 'contantDiv');

    let companyDiv = document.createElement('div');
    companyDiv.innerHTML = `Company: ${company.name}, Department: ${company.department}, Title: ${company.title}`;
    div.appendChild(companyDiv);

    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = `Name: ${data.firstName} ${data.lastName}`;
    div.appendChild(nameDiv);

    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = `Address: ${address.address}, ${address.city}, ${address.state}, ${address.country}`;
    div.appendChild(addressDiv);

    let bankDiv = document.createElement('div');
    bankDiv.innerHTML = `Bank: ${bank.cardNumber}, ${bank.cardExpire}, ${bank.cardType}`;
    div.appendChild(bankDiv);

    let otherInfoDiv = document.createElement('div');
    otherInfoDiv.innerHTML = `Birth Date: ${birthDate}, Height: ${height}, Phone: ${phone}, University: ${university}`;
    div.appendChild(otherInfoDiv);

    let imgLink = document.createElement('a');
    imgLink.href = 'index.html';
    div.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    let imgDiv = document.createElement('img');
    imgDiv.setAttribute('src', image);
    imgLink.appendChild(imgDiv);
    div.appendChild(imgLink);

    document.body.appendChild(div);
}

createDiv();

function changeTitle(){
    document.title = `User ${param}`
}
changeTitle()