module.exports = function findItemsOver(findItem,threshold){
var totalItems = []
for (var i=0; i<findItem.length; i++) {
  var item = findItem[i]
  if (item.qty > threshold){
   totalItems.push(item);
  }
}
return totalItems
};
