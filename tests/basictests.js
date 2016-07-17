var test = require('tape');
var randomApod = require('../index');

test('Basic test', basicTest);

function basicTest(t) {
  var entry = randomApod();
  console.log(entry);
  t.equal(typeof entry.image, 'string', 'Entry has an image.');
  t.equal(typeof entry.title, 'string', 'Entry has a title.');
  t.end();
}
