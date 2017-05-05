module.exports = function fromWhere(regNumber){
 if (regNumber === 'CY' ){
	 return 'Bellville'
 }

 else if (regNumber === 'CJ'){
      return 'Paarl'
 }

  else if (regNumber === 'CA'){
  	  return 'Cape Town'
 }
  else{
  return 'Some other place!'}

};
console.log(fromWhere('Cape Town'));
