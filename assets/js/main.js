
// *********************************
// ::1.0  Initial Sitcky Navigation (Rules-01)_
// *********************************

$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	console.log(scroll);
	if(scroll > 120){
		$('.main-nav').addClass('sticky');
	}
	else{
		$('.main-nav').removeClass('sticky');
	}
})

// *********************************
// ::1.0  Initial Sitcky Navigation (Rules-02)_
// *********************************

// $(window).scroll(function(){
// 	var scroll = $(window).scrollTop();
// 	console.log(scroll);
// 	if(scroll > 120){
// 		$('.main-nav').css({'position': 'fixed', 'top': '0px', 'left':'0', 'z-index':'9999', 'width':'100%', 'box-shadow': '0 5px 5px rgba(0,0,0,0.06)', 'transition': 'all 500ms ease-in-out','background':'#FFFFFF'}).animate({opacity:1},300);
// 	}
// 	else{
// 		$('.main-nav').removeClass('sticky');
// 	}
// })

