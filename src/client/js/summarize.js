const summarize = (event) => {
  event.preventDefault();

  const url = document.getElementById('summarize').value;

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

        // reveal the hidden summary results div and hide sentiment results div if it's visible
        summaryContainer.style.display = 'block';
        document.getElementById('sentiment-results-container').style.display = 'none';

        // reset the form after clicking submit
        document.getElementById('summary-form').reset();

        // insert searched URL in link format into results div
        document.getElementById('searched-url').innerHTML = url.link(url);

        // insert summary sentences into existing html elements
        document.getElementById('summary-1').innerHTML = data.sentences[0];
        document.getElementById('summary-2').innerHTML = data.sentences[1];
        document.getElementById('summary-3').innerHTML = data.sentences[2];
        document.getElementById('summary-4').innerHTML = data.sentences[3];

        // scroll summary results into view
        document.getElementById('summary-4').scrollIntoView({
          behavior: 'smooth'
        });
      });
}

export {
  summarize
};