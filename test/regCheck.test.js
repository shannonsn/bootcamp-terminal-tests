const regCheck = require('../regCheck');
const assert = require('assert');

describe('should check my regCheck function', function(){

    it('should check my regCheck function', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),1);
    });

});
