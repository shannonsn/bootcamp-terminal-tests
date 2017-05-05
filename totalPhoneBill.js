module.exports = function totalPhoneBill(cost){
  var spliCost = cost.split(', ');
  var cost = 0;
 for (var i=0;i<spliCost.length;i++){
  var costList = spliCost[i];

   if(costList === 'call'){
     cost += 2.75}
   if(costList === 'sms'){
     cost += 0.65}
 }
   return 'R' +cost.toFixed(2);

};
console.log(totalPhoneBill('call, sms, call, sms, sms'));
