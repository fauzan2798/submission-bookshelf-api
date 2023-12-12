const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    // Kriteria 1 : Aplikasi menggunakan port 9000
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server sedang berjalan pada ${server.info.uri}`);
};

init();
