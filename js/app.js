
require.config({
	baseUrl: "js/lib",
		paths: {
		    TweenMax : 'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.11.1/TweenMax.min',
			app : "../app",
			
			jquery : 'jquery-1.11.0.min',
			// key needs quotes because of dot in name
			'jquery.purls' : 'purls',

      		// becaue we aren't using this, it won't load
      		

      		"jquery.bootstrap": "../../bootstrap/js/bootstrap.min",
      		
			jqueryui : "jquery-ui-1.10.4.custom.min"
      		//jqueryui : "jquery-ui-1.10.4.min"
		},
		waitSeconds: 15,
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