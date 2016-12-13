var sha256 = require('./coolimage_sha256');

exports.calcMaster = calcMaster;
exports.calc2009a = calc2009a;
exports.calc2009b = calc2009b;
	
function hash_password(pw) {
	return sha256.sha(pw + '@coolimage.com').toLowerCase();
}

function calcMaster(city, pass) {
	if (city.length == 0) city = 'coolimage';
	var stage_common = hash_password(city);
	return hash_password(stage_common + pass);
}
	
function calc2009a(stage_master, sitename) {
	return hash_password(stage_master + sitename).substr(0, 16);
}

function calc2009b(stage_master, sitename) {
	return 'C!' + hash_password(stage_master + sitename).substr(0, 16);
}

