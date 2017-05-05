module.exports = function findItemsOver20(findItem){
var totalItems = []
for (var i=0; i<findItem.length; i++) {
  var item = findItem[i];
  if (item.qty > 20){
   totalItems.push(item);
  }
}
return totalItems
};
