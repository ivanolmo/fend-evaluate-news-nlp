function sentiment(event) {
  event.preventDefault();

  const searchTerm = document.getElementById("sentiment").value;

  if (!searchTerm) return;

  console.log(`running sentiment analysis using the term: ${searchTerm}`);

  fetch("/sentiment", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(searchTerm)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById("search-term").innerHTML = searchTerm;
      document.getElementById("results").innerHTML = data.polarity;
      document.getElementById("subjectivity").innerHTML = data.subjectivity;
    });
}

export { sentiment };