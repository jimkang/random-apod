var jsonfile = require('jsonfile');
var probable = require('probable');
var apodEntries = jsonfile.readFileSync('./abbreviated-apod.json');

function randomApod() {
  return probable.pickFromArray(apodEntries);
}

module.exports = randomApod;
