var request = require('request')
var conf = require('./vars.json')

var api_endpoint = "https://api.spark.io/v1/devices/"

var device = conf.id || process.env.SPARK_ID
var key = conf.key || process.env.SPARK_ACCESS_KEY

console.log(device, key)

module.exports = function(bool) {
  var command = bool? 'ON' : 'OFF'

  var earl = api_endpoint + device + '/relay';

  request({
    url: earl,
    method: 'POST',
    json: true,
    form: {
      access_token: key,
      params: command
    }
  }, console.log)

}
