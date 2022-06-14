
//Using Promise.all with Async/Await to get data from multiple endpoints
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
];

const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    console.log(response);
  } catch (error) {
    console.log("Error", error);
  }
};
fetchData();
