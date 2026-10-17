/** @license Apache-2.0 */

'use strict';

/**
* Negative binomial distribution excess kurtosis.
*
* @module @stdlib/stats-base-dists-negative-binomial-kurtosis
*
* @example
* var kurtosis = require( '@stdlib/stats-base-dists-negative-binomial-kurtosis' );
*
* var v = kurtosis( 100, 0.2 );
* // returns ~0.061
*
* v = kurtosis( 20, 0.5 );
* // returns ~0.325
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
