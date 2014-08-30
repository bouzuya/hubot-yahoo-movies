# Description
#   A Hubot script that search keywords from Yahoo movies
#
# Dependencies:
#   "hubot-arm": "^0.2.0",
#   "hubot-request-arm": "^0.2.0"
#
# Configuration:
#   None
#
# Commands:
#   hubot yahoo-movies <query> - search keywords from Yahoo movies
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  require('hubot-arm') robot

  robot.respond /yahoo-movies\s+(.+)$/i, (res) ->
    query = res.match[1]
    res.robot
      .arm('request')
        method: 'GET'
        url: 'http://movies.yahoo.co.jp/search/'
        qs: { query }
        format: 'html'
      .then (r) ->
        movies = []
        r.$('#list-module li > a').each ->
          item = r.$(@)
          title = item.attr('title')
          url = 'http://movies.yahoo.co.jp' + item.attr('href')
          movies.push { title, url }
        message = movies
          .map (movie) -> "#{movie.title} : #{movie.url}"
          .join '\n'
        res.send message
