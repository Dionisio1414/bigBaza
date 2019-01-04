$(function() {
	$('.home-slider').slick({
		dots: true
	});
	$('.product__slider').slick({
		prevArrow: $('.product .arrows .prev'),
		nextArrow: $('.product .arrows .next')
	});
	$('.plumbing__slider').slick({
		prevArrow: $('.plumbing .caption-row .arrows-navigation li.prev'),
		nextArrow: $('.plumbing .caption-row .arrows-navigation li.next')
	});
	$('.ft-slider').slick({
		slidesToShow: 5
	});
});