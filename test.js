const ping = require('ping')
const hosts = [
  'http://strapi_app:1337',
  'http://172.18.0.9:1337',
  'https://strapi.ranjitsingh.nl'
]

hosts.forEach(function (host) {
  ping.sys.probe(host, function (isAlive) {
    var msg = isAlive
      ? 'host ' + host + ' is alive'
      : 'host ' + host + ' is dead'
    console.log(msg)
  })
})
