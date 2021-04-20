/* eslint-disable */
require('dotenv-flow').config({ path: '.' });
const download = require('download');
const fs = require('fs');

download(process.env.SWAGGER_JSON_URL, {}).pipe(
  fs.createWriteStream('swagger_swvr.json')
);


