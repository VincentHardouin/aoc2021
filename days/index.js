const path = require('path');
const dir = path.join(__dirname, '.');
const days = require('fs')
  .readdirSync(dir)
  .filter((file) => {
    return !path.extname(file);
  });

module.exports = days;
