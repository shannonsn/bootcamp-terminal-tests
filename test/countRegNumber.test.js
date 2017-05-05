const countRegNumber = require('../countAllPaarl');
const assert = require('assert');

describe('should check my countRegNumber function', function(){

    it('should check my countRegNumber function', function(){
        assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'),1 );
    });

});
