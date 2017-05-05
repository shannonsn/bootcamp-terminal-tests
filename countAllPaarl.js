module.exports = function countAllPaarl(regNumber){
  var sepList = regNumber.split(', ');
  var pPlates = [];
 for (var i=0;i<sepList.length;i++){
   var origPlates = sepList[i];

 if (origPlates.startsWith('CJ')){
     pPlates.push(origPlates);
 }
 }
   return pPlates.length;
};
// console.log(countAllPaarl('CL 124,CY 567,CL 345, CJ 456,CL 341'));
