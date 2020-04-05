const GRAPH_QL_URL = "http://localhost:9000/";

// Since http request is aynchronous we use async await.
async function fetchGreeting() {
  const response = await fetch(GRAPH_QL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `
            query{
                greetings
              }
            `
    })
  });

  //Object destructuring as responseBody has data and await as fetch api also returns a promise.
  const { data } = await response.json();
  return data;
}

//since its a PROMISE
fetchGreeting().then(({ greetings }) => {
  const title = document.querySelector("h1");
  title.textContent = greetings;
});
