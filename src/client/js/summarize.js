const summarize = (event) => {
  event.preventDefault();

  const url = document.getElementById('summarize').value;

  if (!url) return;

  fetch('/summarize', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
    .then(response => response.json())
    .then(data => {
      let summaryContainer = document.getElementById('summary-results-container');

      summaryContainer.style.display = 'block';
      document.getElementById('sentiment-results-container').style.display = 'none';

      document.getElementById('summary-form').reset();

      document.getElementById('searched-url').innerHTML = url.link(url);


      document.getElementById('summary-1').innerHTML = data.sentences[0];
      document.getElementById('summary-2').innerHTML = data.sentences[1];
      document.getElementById('summary-3').innerHTML = data.sentences[2];
      document.getElementById('summary-4').innerHTML = data.sentences[3];

      let lastElem = document.getElementById('summary-4');
      lastElem.scrollIntoView({
        behavior: 'smooth'
      });
    });
}

export {
  summarize
};