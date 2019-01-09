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
	
	
	//tabs
	
	var $productTabs = $('.product .tabs a'),
		$slides = $('.product__slider .slick-slide'),
		$filteredSlides = [];
	$slides.each(function(i) {
		if($(this).hasClass('slick-cloned')) {
		   return;
		 } else {
			 $filteredSlides.push($(this));
		 }
	});
	
	console.log($filteredSlides);
	$productTabs.click(function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		console.log($slides);
	});
	
});