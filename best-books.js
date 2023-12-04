const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');
const booksContainer = document.getElementById('books-container');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  let topSellers = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${API_KEY}`;

  fetch(topSellers)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    for (let i = 0; i < Math.min(5, responseJson.results.books.length); i++) {
      const book = responseJson.results.books[i];
      const title = book.title || 'Title not available';
      const author = book.author || 'Author not available';
      const description = book.description || 'Description not available';
      const imgUrl = book.book_image || 'placeholder-image-url.jpg';
      
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('mb-3');

      const titleEl = document.createElement('h3');
      titleEl.textContent = `Title: ${title}`;
      bookDiv.appendChild(titleEl);

      const authorEl = document.createElement('h6');
      authorEl.textContent = `Author: ${author}`;
      bookDiv.appendChild(authorEl);

      const descriptionEl = document.createElement('p');
      descriptionEl.textContent = `Description: ${description}`;
      bookDiv.appendChild(descriptionEl);

      const imgEl = document.createElement('img');
      imgEl.src = imgUrl;     
      bookDiv.appendChild(imgEl);

      booksContainer.appendChild(bookDiv);
    }
  })
  .catch(error => {
    console.error('Error finding books:', error);
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = 'Could not find any books for that date. Please try another date.';
  });
});




