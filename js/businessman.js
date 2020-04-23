$(document).ready(function(){
	// menu
	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
	    $('.header__form input').toggleClass('mobile-menu_active');
	    $('html').toggleClass('lock');
	});
	// test
	$('.test__start-button').on('click', function(){
		$('.test_2').addClass('active');
		$('.test_2').siblings().removeClass('active');
	});
	$('.test__next-button.test_2__button').on('click', function(){
		$('.test_3').addClass('active');
		$('.test_3').siblings().removeClass('active');
	});
	$('.test__next-button.test_3__button').on('click', function(){
		$('.test_4').addClass('active');
		$('.test_4').siblings().removeClass('active');
	});
	$('.test__next-button.test_4__button').on('click', function(){
		$('.test_5').addClass('active');
		$('.test_5').siblings().removeClass('active');
	});
	$('.test__next-button.test_5__button').on('click', function(){
		$('.test_6').addClass('active');
		$('.test_6').siblings().removeClass('active');
		$('.test__container').addClass('active');
	});

	$('.test__back-button.test_2__button').on('click', function(){
		$('.test_1').addClass('active');
		$('.test_1').siblings().removeClass('active');
	});
	$('.test__back-button.test_3__button').on('click', function(){
		$('.test_2').addClass('active');
		$('.test_2').siblings().removeClass('active');
	});
	$('.test__back-button.test_4__button').on('click', function(){
		$('.test_3').addClass('active');
		$('.test_3').siblings().removeClass('active');
	});
	$('.test__back-button.test_5__button').on('click', function(){
		$('.test_4').addClass('active');
		$('.test_4').siblings().removeClass('active');
		$('.test__container').removeClass('active');
	});

	// pop-up
	$('.call-order-btn').on('click', function(){
		$('.popup-background, .call-order-wrapper').addClass('active');
		$('html').addClass('lock');
	});
	$('.call-order__button').on('click', function(){
		$('.call-order').addClass('active');
	})
	$('.popup__close-button, .popup-background').on('click', function(){
		$('.popup-background, .call-order-wrapper').removeClass('active');
		$('html').removeClass('lock');
		$('.call-order').removeClass('active');
	});
	// slider
	$('.main').slick({
		infinite: true,
		arrows: false,
		dots: true,
		slidesToShow:1,
		speed:800
	});
	// range
	$(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 10000,
        max: 10000000,
        from: 400000,
        to: 9600000,
        grid: false,
        step: 10000,
        postfix: ' ₽'
    });
});
$(document).on("scroll", function(){
    if($(document).scrollTop()>0){
        $("header").removeClass("header_large").addClass("header_small");
		$('.sign-in__message').removeClass('sign-in__message_active');
    } else{
        $("header").removeClass("header_small").addClass("header_large");
    }
});