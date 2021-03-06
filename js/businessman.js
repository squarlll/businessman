$(document).ready(function(){
	// pop-up
	$('.call-order-btn, .main__button_2, .main__button, .statistics__button button, .footer__tel-button').on('click', function(){
		$('.popup-background, .call-order-wrapper').addClass('active');
		$('.nav').removeClass('menu-active');
		$('.header__menu-btn').removeClass('hamburger-active');
		$('html').addClass('lock');
	});
	$('.call-order__button').on('click', function(){
		if ($('.popup__tel').is(":not(:invalid)")) {
			$('.popup-thank').addClass('active');
			$('.popup').addClass('active');
			var yourName = $('.popup__name').val();
			$('.popup-thank__image img').addClass('img_visible')
			$('.popup-thank__title .popup-thank__your-name').html(yourName)
		}
	});
	$('.file__button button').on('click', function(){
		$('.popup-background, .file-download-wrapper').addClass('active');
		$('.header__menu-btn').removeClass('hamburger-active');
		$('html').addClass('lock');
	});
	$('.file__button_2').on('click', function(){
		if ($('.file-download__tel').is(":invalid")) {
			$('.file-download__tel').toggleClass('active')
		} else {
			$(this).attr('href', 'book.pdf');
			$('.popup-background, .call-order-wrapper, .file-download-wrapper').removeClass('active');
			$('html').removeClass('lock');
			$('.popup-thank').removeClass('active');
			$('.popup').removeClass('active');
		}
	});
	$('.popup__close-button, .popup-background').on('click', function(){
		$('.popup-background, .call-order-wrapper, .file-download-wrapper').removeClass('active');
		$('html').removeClass('lock');
		$('.popup-thank').removeClass('active');
		$('.popup').removeClass('active');
	});
	// menu
	$('.header__menu-btn').on('click', function(){
		$('.header__menu ul').toggleClass('menu-active');
		$(this).toggleClass('hamburger-active');
		$('.header').toggleClass('header-active');
	    $('.header__form input').toggleClass('mobile-menu_active');
	    $('html').toggleClass('lock');
	});
	$('a[href^="#"]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr("href")).offset().top - 110}, 800);
		e.preventDefault();
		return false;
	});
	if (window.matchMedia("(max-width: 768px)").matches) {
		$('.link-1, .link-2, .link-3').on('click', function(){
			$('.header__menu ul').removeClass('menu-active');
			$('.header__menu-btn').removeClass('hamburger-active');
			$('.header').removeClass('header-active');
			$('.header__form input').removeClass('mobile-menu_active');
			$('html').removeClass('lock');
		});
	}
	var str1 = $('.test__range_1').val();
	var str2 = $('.test__range_2').val();
	$('.range_1__result').html(str1.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' <img src="img/ico/ruble.svg" alt="">');
	$(document).on('input change', '.test__range_1', function() {
		var str1 = $('.test__range_1').val();
		$('.range_1__result').html(str1.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' <img src="img/ico/ruble.svg" alt="">');
	});

	$('.range_2__result').html(str2.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' <img src="img/ico/ruble.svg" alt="">');
	$(document).on('input change', '.test__range_2', function() {
		var str2 = $('.test__range_2').val();
		$('.range_2__result').html(str2.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' <img src="img/ico/ruble.svg" alt="">');
	});
	// test
	$('.test__start-button').on('click', function(){
		$('.test_2').addClass('active');
		$('.test_2').siblings().removeClass('active');
		$('.test').addClass('active');
	});
	$('.test__next-button.test_2__button').on('click', function(){
		$('.test_3').addClass('active');
		$('.test_3').siblings().removeClass('active');
		$('.test').addClass('active');
	});
	$('.test__next-button.test_3__button').on('click', function(){
		$('.test_4').addClass('active');
		$('.test_4').siblings().removeClass('active');
		$('.test').addClass('active');
	});
	$('.test__next-button.test_4__button').on('click', function(){
		$('.test_5').addClass('active');
		$('.test_5').siblings().removeClass('active');
		$('.test').addClass('active');
	});
	$('.test__next-button.test_5__button').on('click', function(){
		$('.test_6').addClass('active');
		$('.test_6').siblings().removeClass('active');
		$('.test__container').addClass('active');
		$('.test').addClass('active');
	});

	$('.test__back-button.test_2__button').on('click', function(){
		$('.test_1').addClass('active');
		$('.test_1').siblings().removeClass('active');
		$('.test').removeClass('active');
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

	$('.answer_1, .answer_2, .answer_3, .answer_4').slideUp(0);
	// questions
	$('.question_1').on('click', function(){
		$('.questions__boxes .questions__box:nth-child(1)').toggleClass('active');
		$('.answer_1').slideToggle(450);
		$('.question__button_1').toggleClass('active');
	});
	$('.question_2').on('click', function(){
		$('.questions__boxes .questions__box:nth-child(2)').toggleClass('active');
		$('.questions__boxes .questions__box:nth-child(1)').toggleClass('active_2');
		$('.answer_2').slideToggle(450);
		$('.question__button_2').toggleClass('active');
	});
	$('.question_3').on('click', function(){
		$('.questions__boxes .questions__box:nth-child(4)').toggleClass('active');
		$('.questions__boxes .questions__box:nth-child(5)').toggleClass('active_2');
		$('.answer_3').slideToggle(450);
		$('.question__button_3').toggleClass('active');
	});
	$('.question_4').on('click', function(){
		$('.questions__boxes .questions__box:nth-child(5)').toggleClass('active');
		$('.answer_4').slideToggle(450);
		$('.question__button_4').toggleClass('active');
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
// slider
$('.main').slick({
	infinite: true,
	arrows: false,
	dots: true,
	slidesToShow:1,
	speed:350,
	padding: 10
});