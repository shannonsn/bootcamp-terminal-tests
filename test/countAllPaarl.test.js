const countAllPaarl = require('../countAllPaarl');
const assert = require('assert');

describe('should check my countAllPaarl function', function(){

    it('should check my countAllPaarl function', function(){
      assert.equal(countAllPaarl('CL 124,CY 567,CL 345, CJ 456,CL 341'),1);


    });

});
