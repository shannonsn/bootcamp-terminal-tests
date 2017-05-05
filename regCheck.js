module.exports = function regCheck(registrationNumber,location){
  var regCheck =registrationNumber.endsWith(location);
  return regCheck

};
//  var isGP = regCheck('DV 23 NB GP', 'GP');
// console.log(isGP);
//
//
// var isMP = regCheck('DV 23 LP GP', 'MP');
// console.log(isMP);
