'use strict';

const server = require('./lib/server.js');

server.listen(3000, () => {
  console.log('Server is on port 3000');
});
