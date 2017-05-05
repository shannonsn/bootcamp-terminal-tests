module.exports = function yearsAgo(year){
var today = new Date();
var thisYear = today.getFullYear();
var yearsAgo = thisYear - year
return yearsAgo

}
// console.log (yearsAgo(1997))
