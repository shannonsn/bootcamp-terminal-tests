module.exports = function allFromTown(regNumber,location){
  var sepList = regNumber.split(',');
  var pPlates = [];
 for (var i=0;i<sepList.length;i++){
   var origPlates = sepList[i];

 if (origPlates.startsWith(location)){
     pPlates.push(origPlates);
 }
 }
   return pPlates;
}
console.log(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
