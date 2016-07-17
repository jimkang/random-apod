var fs = require('fs');
var entries = JSON.parse(fs.readFileSync(process.argv[2])).apod;
var abbreviated = [];
entries.forEach(addEntryIfItHasAnImage);
process.stdout.write(JSON.stringify(abbreviated, null, '  '));

function addEntryIfItHasAnImage(entry) {
   if (entry.image) {
    abbreviated.push({id: entry.id, title: entry.title, image: entry.image});
  }
}
