function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts");
}

getData()
  .then((data) => data.json())
  .then((data) => console.log(data));
