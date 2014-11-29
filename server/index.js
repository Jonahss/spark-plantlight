var plantlight = require('../plantlight.js')
var SunCalc = require('suncalc')

var lightCondition = function() {
  var now = new Date();
  var times = SunCalc.getTimes(now, 37.758481, -122.395866)

  var startLight = times.sunrise.setHours(times.sunrise.getHours() + 1)
  var endLight = times.sunset.setHours(times.sunset.getHours() - 1)


  return (now > startLight && now < endLight)
}

var lightOn = lightCondition();
var previous = !lightOn;

var loop = function() {
  if (lightOn != previous) {
      plantlight(lightOn);
      previous = lightOn;
  }

  lightOn = lightCondition()

  setImmediate(loop)
}

//plantlight(process.argv[2] == '1');

loop()
