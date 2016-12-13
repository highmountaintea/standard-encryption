var stdenc2009 = require('./standard_encryption_2009');


function encrypt2009(site, city, pass) {
  // capitalize city
  var master = stdenc2009.calcMaster(city, pass);
  var str = stdenc2009.calc2009a(master, site.toLowerCase());
  return str;
}

function encrypt2009b(site, city, pass) {
  // capitalize city
  var master = stdenc2009.calcMaster(city, pass);
  var str = stdenc2009.calc2009b(master, site.toLowerCase());
  return str;
}

// sample usage via console
if (process.argv.length > 4) {
  console.log(encrypt2009b(process.argv[2], process.argv[3], process.argv[4]));
}
