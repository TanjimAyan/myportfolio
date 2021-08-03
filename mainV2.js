		$(document).ready(function(){

			let bodyH = $('body').height();

			$(window).scroll(function(){

				let vh = $('.vhScale').height();  //use a div into index page with 100vh height and fixed position.

				let scrollTop_pos = $(window).scrollTop();

				let overflow = bodyH - vh;

				overflow = Math.round(overflow);

				scroll_percent = 100 / overflow;

				scroll_percent = scroll_percent * scrollTop_pos;

				var scroll_indicator = $('.scroll-indicator').css('width',scroll_percent + '%');

			});

		});