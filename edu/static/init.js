




/*
     FILE ARCHIVED ON 18:04:43 Oct 1, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:14:03 Oct 17, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*global jQuery, window, console, can, document */


var P2PU = window.P2PU || {};

(function ($, P2PU) {

	'use strict';


	var init = function () {
		$(function () {
			$(".p2pu-tab").p2puSlider({
				navbarContainer: '.navbar',
				icon: '.p2pu-tab-icon',
				iconUp: 'fa fa-chevron-down',
				iconDown: 'fa fa-chevron-up'
			});
		});
	};

	P2PU.ciab = {};
	P2PU.ciab.init = init;

}(jQuery, P2PU));