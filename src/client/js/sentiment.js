const sentiment = (event) => {
  event.preventDefault();

  const text = document.getElementById('sentiment-search').value;

  if (!text) return;

  fetch('/sentiment', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('sentiment-results-container').style.visibility = 'visible';
      document.getElementById('search-term').innerHTML = text;
      document.getElementById('sentiment-form').reset();
      const fields = ['polarity', 'subjectivity', 'polarity_confidence', 'subjectivity_confidence'];
      fields.forEach((field) => {
        document.getElementById(field).innerHTML = data[field];
      })
    });
}

export {
  sentiment
};