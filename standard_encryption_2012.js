var sha256 = require('./coolimage_sha256');
var encoder = require('./coolimage_encoder');

exports.unihash = unihash;
exports.calc2012 = calc2012;
exports.calc2012full = calc2012full;

function hash(str) {
	var binarray = sha256.sha(str + '@coolimage.com', true);
	var binstr = encoder.binarray2str(binarray);
	var b64 = encoder.base64_encode(binstr);
	return b64;
}

// convert city,pass into unihash
// city in lowercase
function unihash(city, pass) {
	return hash(city + ',' + pass);
}

// use unihash and site_domain to generate site pass
function calc2012(unihash, site_domain) {
	var raw_sitepass = hash(unihash + site_domain);
	// replace the 3 special chars with 0, because numbers are harder to come by
	return raw_sitepass.replace('+', '0').replace('/', '0').replace('=', '0').substr(0, 16);
}

function calc2012full(unihash, site_domain) {
	var raw_sitepass = hash(unihash + site_domain);
	// replace the 3 special chars with 0, because numbers are harder to come by
	return raw_sitepass.replace(/[+\/=]/g, '0').substr(0, 40);
}
