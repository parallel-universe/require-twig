/*
 * require-twig
 * https://github.com/parallel-universe/require-twig
 *
 * Copyright (c) 2013 Basekit
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var require-twig = require('../lib/require-twig.js');

describe('require-twig module', function(){
  describe('#awesome()', function(){
    it('should return a hello', function(){
      require-twig.awesome('livia').should.equal("hello livia");
    });
  });
});
