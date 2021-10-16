const express = require('express');
const { port } = require('./config');

function startServer() {
  const app = express();

  app
    .listen(port, () => {
      console.log(`Listening on: ${port}`);
    })
    .on('error', (e) => {
      console.error(e);
      process.exit(1);
    });


}

startServer();