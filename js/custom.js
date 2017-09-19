"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        /**
         * Renders Projects/Portfolio
         * This helper script created by Stephe Wong.  Copyright 2017 stwong.com.  
         * Dual-licensed under the GPL and MIT licenses.  
         * All individual scripts remain property of their copyrighters.
         * Date: 10-Aprl-2017
         * Version: 1.0.0
         */

        $(document).ready(function () {
            var projectsList = $("#projectsList");

            // Generate Profile/Projects from an external source.
            $.getJSON("js/projects.json", function (data) {

                $.each(data.Project, function (key, value) {
                    var appendText = "<div class=\"box\"><div class=\"col-lg-4 col-lg-offset-1\"><p>            <div class=\"os-animation\" data-os-animation=\"bounceInLeft\" data-os-animation-delay=\"0.7s\">            <img class=\"img-responsive\" style=\"max-height: 300px; max-width: 300px;\" src=\"" + value.imageHighResolution + "\" alt=\"" + value.altTextImage + "\"/>            </div> \n            </p></div>            <div class=\"col-lg-6\">            <div class=\"os-animation\" data-os-animation=\"slideInUp\" data-os-animation-delay=\"0.5s\">            <h4>" + value.title + "</h4>            </div>            <div class=\"os-animation\" data-os-animation=\"bounceInRight\" data-os-animation-delay=\"1.0s\">            <p><more>" + value.description + "<br/><br/></more></p>            </div>            </div></div>";
                    // console.log(appendText);
                    $('#projectsList').append(appendText);
                    // $('#projectsList').append('<div class="box"><div class="col-lg-4 col-lg-offset-1"><p><img class="img-responsive" style="max-height: 300px; max-width: 300px;" src="' + value.imageHighResolution + '"  alt="' + value.altTextImage + '"></p></div><div class="col-lg-6"><h5>' + value.title + '</h5><p><more>' + value.description + '<br/><br/></more></p></div></div>');
                });

                // Waypoints for javascript functions
                // hide our element on page load
                $('.wp-fadeIn').css('opacity', 0);

                $('.wp-fadeIn').waypoint(function () {
                    $('.wp-fadeIn').addClass('fadeIn');
                }, { offset: '70%' });

                // hide our element on page load
                $('.element-to-animate-fadeLeft').css('opacity', 0);

                $('.element-to-animate-fadeLeft').waypoint(function () {
                    $('.element-to-animate-fadeLeft').addClass('bounceInLeft');
                    $('.element-to-animate-fadeLeft').css('opacity', 100);
                }, { offset: '70%' });

                // Animations with waypoint triggers
                onScrollInit($('.os-animation'));

                function onScrollInit(items, trigger) {
                    items.each(function () {
                        var osElement = $(this),
                            osAnimationClass = osElement.attr('data-os-animation'),
                            osAnimationDelay = osElement.attr('data-os-animation-delay');

                        osElement.css({
                            '-webkit-animation-delay': osAnimationDelay,
                            '-moz-animation-delay': osAnimationDelay,
                            'animation-delay': osAnimationDelay
                        });

                        var osTrigger = trigger ? trigger : osElement;

                        osTrigger.waypoint(function () {
                            osElement.addClass('animated').addClass(osAnimationClass);
                        }, {
                            triggerOnce: true,
                            offset: '90%'
                        });
                    });
                }
            });
        });
    }, {}] }, {}, [1]);