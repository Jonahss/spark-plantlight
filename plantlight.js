var request = require('request')

var api_endpoint = "https://api.spark.io/v1/devices/"

var device = process.env.SPARK_ID
var key = process.env.SPARK_ACCESS_KEY

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

//curl https://api.spark.io/v1/devices/55ff6b065075555326281887/relay   -d access_token=8f4a33baa26bec787287078b3231b4409ecbd7cd   -d params=OFF
