const {
  addBookHandler,
  getAllBooksHandler,
  getSpecifiedBookHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
  getReadingAllBooks,
} = require('./handler');

const routes = [
  {
    // Kriteria 3 : API dapat menyimpan buku
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    // Kriteria 4 : API dapat menampilkan seluruh buku
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    // Kriteria 5 : API dapat menampilkan detail buku
    method: 'GET',
    path: '/books/{id}',
    handler: getSpecifiedBookHandler,
  },
  {
    // Kriteria 6 : API dapat mengubah data buku
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    // Kriteria 7 : API dapat menghapus buku
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getReadingAllBooks,
  },
];

module.exports = routes;
