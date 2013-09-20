/*!
 * optify
 * Copyright (c) 2013 Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

'use strict';

var loop = require('..'),
	chai = require('chai');

global.window = global;
require('raf.js');

chai.should();

describe('optify', function() {
	it('should emit ticks!', function(done) {
		var called = 0;
		loop.on('tick', function() {
			called++;
		});
		loop.start();
		setTimeout(function() {
			loop.stop();
			called.should.be.above(2);
			done();
		}, 50);
	});

	it('should stop', function(done) {
		var called = 0;
		loop.start();
		loop.stop();
		loop.on('tick', function() {
			called++;
		});
		setTimeout(function() {
			called.should.equal(0);
			done();
		}, 50);
	});
});