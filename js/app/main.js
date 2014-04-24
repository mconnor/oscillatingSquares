
/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global define */

define(["jquery", "jquery.purls", "TweenMax"],
	 function( $ , $purl, TweenMax) {
		"use strict";
		var 
			onResize, createBip,
			init, 
			$container, tweenAlpha,
			configMap = { 
				numOfBips: 100
			};

		onResize = function (){
			 var origX = $container.width()/2,
			 	origY = $container.height()/2;


			//console.log('MYAPP.tweenAlpha ' + MYAPP.tweenAlpha);
			if (tweenAlpha) {
				TweenMax.set($("div.bip") , {x:origX, y:origY, opacity:0});
			} else {
				TweenMax.set($("div.bip") , {x:origX, y:origY});
			}
			

			//divArray.each( function(index, element) {
			//for (var index =0; index < configMap.numOfBips ; index ++) {

				// might be better not to traverse the DOM.  
			$( "div.bip").each( function(index, element) {
				var rad, ang, x2, y2;

			   if (origX < origY) {
				   rad = origX/2;
			   } else {
				   rad = origY/2;
			   }
				ang = Math.random()*2*Math.PI;
				x2 = rad*Math.sin(ang) +  origX;
				y2 = rad*Math.cos(ang) +  origY;
				TweenMax.to( element , 2, {x:x2, y:y2, opacity:1, delay: index*0.01, repeat:-1, yoyo:true} );
	    	});
		};

		createBip = function (i){
			var $div = $("<div class='bip' id='sq"   +  i + "'></div>");
			$container.append($div);
		};


		init = function (elem) {
			var i;
			$container = elem;

			for ( i = 0; i < configMap.numOfBips; i+=1 ) {
				createBip(i);
			}

			//bipArray = $container('div');

			$( window ).on('resize', onResize);
			

			//get query string value w/ jquery plugin

			if ( $.url().param("tweenAlpha" ) === 'true') {
				tweenAlpha = true;
			} else {
				tweenAlpha = false;
			}
			onResize();
		};

		return {
			init : init
		};
	}
);