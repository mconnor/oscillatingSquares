/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/

/*global define */

define(["jquery", "jquery.purls", "TweenMax", "jqueryui"],
    function($, $purl, TweenMax) {
        "use strict";
        var
            onResize, createBip,
            publicInit,
            tweenAlpha = true,
            configMap = {
                numOfBips: 100
            };
        onResize = function(_$container) {
            var origX = _$container.width() / 2,
                origY = _$container.height() / 2;

            //$children = _$container.children('div.bip');

            if (tweenAlpha) {
                TweenMax.set(_$container.children('div.bip'), {
                    x: origX,
                    y: origY,
                    opacity: 0
                });
            } else {
                TweenMax.set(_$container.children('div.bip'), {
                    x: origX,
                    y: origY
                });
            }


            //divArray.each( function(index, element) {
            //for (var index =0; index < configMap.numOfBips ; index ++) {

            // might be better not to traverse the DOM.
            _$container.children('div.bip').each(function(index, element) {
                var rad, ang, x2, y2;

                if (origX < origY) {
                    rad = origX / 2;
                } else {
                    rad = origY / 2;
                }
                ang = Math.random() * 2 * Math.PI;
                x2 = rad * Math.sin(ang) + origX;
                y2 = rad * Math.cos(ang) + origY;
                TweenMax.to(element, 2, {
                    x: x2,
                    y: y2,
                    opacity: 1,
                    delay: index * 0.01,
                    repeat: -1,
                    yoyo: true
                });
            });


        };

        createBip = function(i, _$container) {
            //var elem = "div";

            //var $bip = $("<"+ elem + " class='bip' id='sq"   +  i + "'></" + elem  + ">");
            var $bip = $("<div class='bip' id='sq" + i + "'></div>");
            _$container.append($bip);
        };


        publicInit = function(elem) {
            var i,
                $container = $(elem);


            for (i = 0; i < configMap.numOfBips; i += 1) {
                createBip(i, $container);
            }

            // jQueryUI


            $container.resizable({
                start: function(event, ui) {
                    //console.log('start resize');

                    var $bips = ui.element.children('div.bip');

                    TweenMax.killTweensOf($bips);
                    TweenMax.to($bips, 0.5, {
                        opacity: 0
                    });

                    //$( "ul.level-2" ).children().css( "background-color", "red" );
                },
                stop: function(event, ui) {
                    //console.log('stop resize');
                    onResize(ui.element);
                }
            });
            //get query string value w/ jquery plugin

            if ($.url().param("tweenAlpha") === 'true') {
                tweenAlpha = true;
            } else {
                tweenAlpha = false;
            }



            //$container.resizable();
            onResize($container);
        };

        return {
            init: publicInit
        };
    }
);
