// create api-key.js file with const API_KEY="your_api_key" in this same directory to use
//const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const API_KEY = 'LlsFqCHJDASo4ecWdF0MgASzPdqbEzZ1'
const date = '2022-03-12'
const list = 'hardcover-fiction'
const booksURL = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${API_KEY}`

//const url = `${booksURL}?q=tech&api-key=${API_KEY}`;

/*const asyncFetch = async function () {
  try {
    const data = await fetch(booksURL)

    const dataJson = await data.json()

    console.log("Async / Await func", data)

    console.log("Async / Await func", dataJson)
  } catch (err) {
    console.log(err)
  }
} *///


fetch(booksURL)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  }); 
