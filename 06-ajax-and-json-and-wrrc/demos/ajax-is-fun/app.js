// Let's do this

const url = 'https://server-wuvttyijde.now.sh/books';

$.get('https://swapi.co/api/people/1')
    .then(result => console.log('May the force...', result));

// how to call this https://server-wuvttyijde.now.sh/books
// and get books?
const template = $('#book-template').text();
const render = Handlebars.compile(template); // the "buddy"

$('form').on('submit', (event) => {
    event.preventDefault();
    const bookName = $('#book-name').val();
    const bookAuthor = $('#book-author').val()
    $.post(url, {name: bookName, author: bookAuthor})
});


$.getJSON(url)
    .then(books => {

        books.forEach(book => {
           const bookHtml = render(book); 
           $('ul').append(bookHtml);
        })
    });

    $.getJSON('data/invalid-data.json').then(results => {
        console.log('RESULTS', results);
    }).catch(err => console.error('ERROR:', err))
