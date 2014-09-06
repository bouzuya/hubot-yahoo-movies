# hubot-yahoo-movies

A Hubot script that search keywords from Yahoo movies.

![](http://img.f.hatena.ne.jp/images/fotolife/b/bouzuya/20140906/20140906185250.gif)

## Installation

    $ npm install git://github.com/bouzuya/hubot-yahoo-movies.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-yahoo-movies.git#TAG'

## Example

    bouzuya> hubot help yahoo-movies
      hubot> hubot yahoo-movies <query> - search keywords from Yahoo movies

    bouzuya> hubot yahoo-movies spider
      hubot> アメイジング・スパイダーマン2 (2014) : http://movies.yahoo.co.jp/movie/%E3%82%A2%E3%83%A1%E3%82%A4%E3%82%B8%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%B9%E3%83%91%E3%82%A4%E3%83%80%E3%83%BC%E3%83%9E%E3%83%B32/347722/
             アメイジング・スパイダーマン (2012) : http://movies.yahoo.co.jp/movie/%E3%82%A2%E3%83%A1%E3%82%A4%E3%82%B8%E3%83%B3%E3%82%B0%E3%83%BB%E3%82%B9%E3%83%91%E3%82%A4%E3%83%80%E3%83%BC%E3%83%9E%E3%83%B3/340403/
             スパイダーマン3 (2007) : http://movies.yahoo.co.jp/movie/%E3%82%B9%E3%83%91%E3%82%A4%E3%83%80%E3%83%BC%E3%83%9E%E3%83%B33/325627/
             スパイダーマン2 (2004) : http://movies.yahoo.co.jp/movie/%E3%82%B9%E3%83%91%E3%82%A4%E3%83%80%E3%83%BC%E3%83%9E%E3%83%B32/319039/
             スパイダーマン (2002) : http://movies.yahoo.co.jp/movie/%E3%82%B9%E3%83%91%E3%82%A4%E3%83%80%E3%83%BC%E3%83%9E%E3%83%B3/234686/
             暗殺のオペラ (1969) : http://movies.yahoo.co.jp/movie/%E6%9A%97%E6%AE%BA%E3%81%AE%E3%82%AA%E3%83%9A%E3%83%A9/1608/
             吸血原子蜘蛛 (1958) : http://movies.yahoo.co.jp/movie/%E5%90%B8%E8%A1%80%E5%8E%9F%E5%AD%90%E8%9C%98%E8%9B%9B/5632/
             巨大クモ軍団の襲撃 (1977) : http://movies.yahoo.co.jp/movie/%E5%B7%A8%E5%A4%A7%E3%82%AF%E3%83%A2%E8%BB%8D%E5%9B%A3%E3%81%AE%E8%A5%B2%E6%92%83/5877/

## Configuration

See [`src/scripts/yahoo-movies.coffee`](src/scripts/yahoo-movies.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-yahoo-movies
[travis-badge]: https://travis-ci.org/bouzuya/hubot-yahoo-movies.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-yahoo-movies
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-yahoo-movies.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-yahoo-movies
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-yahoo-movies.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
