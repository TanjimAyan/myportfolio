		// let navbar = document.querySelector('.navWrap');
		// let scrollPrevious = window.pageYOffset;
		// let navH = document.querySelector('.navWrap').clientHeight;



		// window.onscroll = function(){
		// 	let scrollCurrent = window.pageYOffset;
		// 	if(scrollPrevious > scrollCurrent){
		// 		navbar.style.top = '0px';
		// 	}else{
		// 		navbar.style.top= '-' + navH + 'px';
		// 	}
		// 	scrollPrevious = scrollCurrent;
		// }



		/* -------------------------------------------------------------------------------------*/





		$(document).ready(function(){

			let bodyH = $('body').height();




			$(window).scroll(function(){

				let vh = $('.vhScale').height();  //use a div into index page with 100vh height and fixed position.

				let a = vh / 39; // include this line if you want to count scroll from top of the scroll thumb.for vertical indicator.

				a = Math.ceil(a); // include this line if you want to count scroll from top of the scroll thumb.for vertical indicator.

				let scrollTop_pos = $(window).scrollTop();

				scrollTop_pos = scrollTop_pos + vh;

				let scroll_percent = scrollTop_pos * 100;

				scroll_percent = scroll_percent / bodyH;

				scroll_percent = Math.ceil(scroll_percent);

				// scroll_percent = scroll_percent - a; // include this line if you want to count scroll from top of the scroll thumb.for vertical indicator.

				console.clear();

				console.log(scroll_percent);

				console.log(vh);

				console.log(a);

				var scroll_indicator = $('.scroll-indicator').css('width',scroll_percent + '%');

				if(scroll_percent <= a){
					scroll_indicator.css('visibility','hidden');
				}else if(scroll_percent > a){
					scroll_indicator.css('visibility','visible');
				}

			});

			

			

		});