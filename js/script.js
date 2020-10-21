let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
console.log(cities);

let olCities = document.createElement('ol');
console.log(olCities);

let body = document.body;
console.log(body);

let titleList = document.createElement('p');
titleList.innerText = 'Lista miast: ';
body.appendChild(titleList);

body.appendChild(olCities);
console.log(olCities);
for (let city of cities) {
  let li = document.createElement('li');
  li.innerText = city;
  console.log(li);
  olCities.appendChild(li);
}

