var stdenc2009 = require('./standard_encryption_2009');
var stdenc2012 = require('./standard_encryption_2012');
var aes = require('./aes');
var sha256 = require('./coolimage_sha256');

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

function encrypt2012(site, city, pass) {
  var unihash = stdenc2012.unihash(city, pass); //city,pass (city in lowercase)
  var str = stdenc2012.calc2012(unihash, site.toLowerCase());
  return str;
}

function encrypt2012full(site, city, pass) {
  var unihash = stdenc2012.unihash(city, pass); //city,pass (city in lowercase)
  var str = stdenc2012.calc2012full(unihash, site.toLowerCase());
  return str;
}

// sample usage via console
if (process != null && process.argv.length > 4) {
  console.log(encrypt2012(process.argv[2], process.argv[3], process.argv[4]));
}

exports.encrypt2009 = encrypt2009;
exports.encrypt2009b = encrypt2009b;
exports.encrypt2012 = encrypt2012;
exports.encrypt2012full = encrypt2012full;
exports.aes = aes;
exports.sha256 = sha256.sha;
