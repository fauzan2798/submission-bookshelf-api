const { addBookHandler, getAllBooksHandler } = require('./handler');

const routes = [
  {
    // Kriteria 3 : API dapat menyimpan buku
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
];

module.exports = routes;
