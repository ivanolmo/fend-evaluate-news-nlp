# Natural Language Processing using the Aylien API

This project uses the Aylien API to analyze text and return the sentiment and tone of that text. The API is also used to summarize articles/blog posts at a URL into 4 key sentences.

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

The goal of this project is to get practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

The project is build using Node.js, Express, and Webpack. A few simple tests utilize Jest.

To run the development server, follow these steps:
- To run the client and server sides in dev mode, first cd into the project folder and install nodemon with `npm i -D nodemon`.
- Run `npm dev-client`.
- In a second terminal, cd into the project folder and run `npm dev-server`.

To build the project for deployment, follow these steps:
- cd into the project folder and run `npm build-prod`
- If there are no errors, run `npm start` and navigate to `http://localhost:9000` in your browser.

To run Jest testing, cd into the project folder and run `npm test`.