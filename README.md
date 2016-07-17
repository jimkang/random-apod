random-apod
==================

Get a random Astronomy Picture of the Day with metadata.

Basically, selects a random entry from the [apod](https://github.com/slowe/apod) JSON file!

Installation
------------

    npm install random-apod

Usage
-----

    var randomApod = require('random-apod');
    console.log(JSON.stringify(randomApod(), null, '  ');

Output:

    {
      "id": "http://apod.nasa.gov/apod/ap950627.html",
      "title": "An Ultraviolet Image of M101",
      "image": "http://apod.nasa.gov/apod/image/uitm101.gif"
    }

Tests
-----

Run tests with `make test`.

License
-------

[See the apod credits.](https://github.com/slowe/apod#credits)
