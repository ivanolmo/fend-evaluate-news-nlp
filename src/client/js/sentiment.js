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
      let sentimentContainer = document.getElementById('sentiment-results-container');

      // reveal the hidden summary results div and hide sentiment results div if it's visible
      sentimentContainer.style.display = 'block';
      document.getElementById('summary-results-container').style.display = 'none';

      // reset the form after clicking submit
      document.getElementById('sentiment-form').reset();

      // display term that was searched for sentiment
      document.getElementById('search-term').innerHTML = text;

      // insert sentiment results into existing html elements
      const fields = ['polarity', 'subjectivity', 'polarity_confidence', 'subjectivity_confidence'];
      fields.forEach(field => {
        document.getElementById(field).innerHTML = data[field];
      })

      // scroll sentiment results into view
      document.getElementById('subjectivity_confidence').scrollIntoView({
        behavior: 'smooth'
      });
    });
}

export {
  sentiment
};