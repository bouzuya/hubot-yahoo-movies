module.exports = function(robot) {
  require('hubot-arm')(robot);
  return robot.respond(/yahoo-movies\s+(.+)$/i, function(res) {
    var query;
    query = res.match[1];
    return res.robot.arm('request')({
      method: 'GET',
      url: 'http://movies.yahoo.co.jp/search/',
      qs: {
        query: query
      },
      format: 'html'
    }).then(function(r) {
      var message, movies;
      movies = [];
      r.$('#list-module li > a').each(function() {
        var item, title, url;
        item = r.$(this);
        title = item.attr('title');
        url = 'http://movies.yahoo.co.jp' + item.attr('href');
        return movies.push({
          title: title,
          url: url
        });
      });
      message = movies.map(function(movie) {
        return "" + movie.title + " : " + movie.url;
      }).join('\n');
      return res.send(message);
    });
  });
};
