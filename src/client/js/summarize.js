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

      document.getElementById('searched-url').innerHTML = url;
      document.getElementById('summary-form').reset();

      let list = document.createElement('ul');

      data.sentences.forEach(sentence => {
        console.log(sentence);
        let li = document.createElement('li');
        li.textContent = sentence;
        list.appendChild(li);
      });

      summaryContainer.appendChild(list);
    });
}

export {
  summarize
};