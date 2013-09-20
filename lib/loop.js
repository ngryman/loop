/*!
 * loop
 * Copyright (c) 2013 Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

(function(factory) {
	'use strict';

	/**
	 * LoOoOop!
	 */
	var Loop = {

		/**
		 * Start the loop, that's it.
		 */
		start: function() {
			rafId = requestAnimationFrame(tick);
		},

		/**
		 * Stop the loop, that's it again.
		 */
		stop: function() {
			cancelAnimationFrame(rafId);
		},

		/**
		 * Subscribe to an event. Only the `tick` event is available for now, invoked on each tick of the loop
		 * (~16ms).
		 * @param {string} name Name of the event, only `tick` for now.
		 * @param {function} callback Callback to be invoked.
		 */
		on: function(name, callback) {
			callbacks[name] = callbacks[name] || [];
			callbacks[name].push(callback);
		}
	};

	var rafId,
		callbacks = {};

	/**
	 * Tick!
	 * Emit eventz!
	 * @param delta
	 */
	function tick(delta) {
		rafId = requestAnimationFrame(tick);
		emit('tick', delta);
	}

	/**
	 * Emit an event.
	 * @param {string} name Name of the event to emit.
	 * @param {...*} params Parameters to forward to callbacks.
	 */
	function emit(name, params) {
		var eventCallbacks = callbacks[name];
		for (var i = 0, len = eventCallbacks.length; i < len; i++) {
			eventCallbacks[i].apply(null, arguments);
		}
	}

	/**
	 * Exports.
	 */
	factory('loop', Loop);

})(function(name, exports) {
	/*global module: true, define:true, window:true */
	/*jshint strict:false */
	if ('object' == typeof module && module.exports) module.exports = exports;
	else if ('function' == typeof define && define.amd) define(name, [], function() { return exports; });
	else if ('object' == typeof window) window[name[0].toUpperCase() + name.slice(1)] = exports;
});