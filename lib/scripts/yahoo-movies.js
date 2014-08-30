module.exports = function(robot) {
  require('hubot-arm')(robot);
  return robot.respond(/yahoo-movies\s+(.+)$/i, function(res) {
    var query;
    console.log(res);
    query = res.match[1];
    console.log(query);
    return res.robot.arm('request')({
      method: 'GET',
      url: 'http://movies.yahoo.co.jp/search/',
      qs: {
        query: query
      },
      format: 'html'
    }).then(function(r) {
      return console.log(r);
    });
  });
};
