const URL =
"https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");


fetch(URL)
.then((response) => response.json())
.then((jsObject) => {
let business = jsObject.business;

for (let i = 0; i < business.length; i++) {
// console.log(business[i].name);
// You must include your javascript below to display the following information:
// 1. business names, 2.business image,
// 3. business locations, 4. business descriptions
// Here is an example for the name to start you off.

// Creates card and places business name in h2 element
let card = document.createElement("section");
// Adds a classname to the section element above
card.className = "card";
let h2 = document.createElement("h2");
h2.textContent = business[i].name;
card.appendChild(h2);
document.querySelector("div.cards").appendChild(card);

// Create the image location, you can look up how to add image using javascript
let img = document.createElement("img");
img.textContent = business[i].imageurl;
card.appendChild(img);
document.querySelector("div.cards").appendChild(card);
// Include a business location
card.textContent = business[i].address;
card.appendChild(para);
document.querySelector("div.cards").appendChild(para);
// Include a business Description
card.textContent = business[i].description;
card.appendChild(para);
document.querySelector("div.cards").appendChild(para);



}
});
// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to render data in cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await fetchData();

    if (!data) {
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = item.title;

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}

// Call the renderData function to display data
renderData();