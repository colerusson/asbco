async function makeQuery(query) {
  const response = await fetch("http://localhost:3005/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data;
}

export { makeQuery };
