var moment = require('moment');

console.log(moment().format());

// January 1st 1970 at 12:00am -> 0


var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1476115923;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ H:mm A'));

//
