export default function onSubmit(data) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: data.title,
      body: data.commentary,
      userId: data.userId,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
