
require.config({
	baseUrl: "js/lib",
		paths: {
		    TweenMax : 'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.1/TweenMax.min',
			app : "../app",
			
			jquery : 'jquery',
			// key needs quotes because of dot in name
			'jquery.purls' : 'purls',

      		// becaue we aren't using this, it won't load
      		"jquery.bootstrap": "../../bootstrap/js/bootstrap.min"
		},
		shim: {
			"jquery.bootstrap": {
				deps: ["jquery"],
				exports: 'Bootstrap'
			}
		}
});


// Load the main app module to start the app

require( ["app/main", "jquery" ], function( main, $){
	$(document).ready(function() {
		main.init( $('#box1') );
		main.init( $('#box2') );
	});
});