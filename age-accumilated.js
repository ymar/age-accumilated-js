$(function () {
var age, daysBetweenDates;
daysBetweenDates = function(d1, d2) {
  var diffDays, oneDay;
  oneDay = 24 * 60 * 60 * 1000;
  diffDays = (d2 - Date.parse(d1)) / oneDay;
  return diffDays;

};

age = function() {

var days, trim

  var value = (daysBetweenDates ('Jun 2, 1940', new Date()) / 365);
  $('#myAge').text( value.toFixed(9) );


};

setInterval(age, 20);

});
