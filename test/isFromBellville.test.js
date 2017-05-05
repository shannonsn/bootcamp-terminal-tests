const isFromBellville = require('../isFromBellville');
const assert = require('assert');

describe('should check my isFromBellville function', function(){

    it('should check my isFromBellville function', function(){
        assert.equal(isFromBellville('CY'),true);
    });

});
