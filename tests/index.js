var should = require('chai').should();
var hn = require('../index');

describe('Top Stories call', function(){

	it('should return the top stories', function(done){
		hn.topstories(function(err, stories){
			if(err) return done(err);
			stories.length.should.equal(500);
			done();
		});
	});

});