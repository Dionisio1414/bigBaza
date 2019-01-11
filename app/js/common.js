$(function() {
	$('.home-slider').slick({
		dots: true
	});
	$('.product__slider').slick({
		prevArrow: $('.product .arrows li.prev'),
		nextArrow: $('.product .arrows li.next')
	});
	$('.plumbing__slider').slick({
		prevArrow: $('.plumbing .caption-row .arrows-navigation li.prev'),
		nextArrow: $('.plumbing .caption-row .arrows-navigation li.next')
	});
	$('.ft-slider').slick({
		slidesToShow: 5
	});
	
	
	// tabs
	
	var $productTabs = $('.product .tabs a'),
		$sliders = $('.product__slider');
	
	$productTabs.click(function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$sliders.removeClass('active').eq($(this).index()).addClass('active');
		$('.product__slider').slick('setPosition');
		
	});
	
	// counter for products
	
	var $plus = $('.product__slider .card-item .bottom-part .add-to-card .plus');
	
	console.log($plus);
	
	$('.product__slider .card-item .bottom-part .add-to-card .plus').on('click', function(e) {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		$input.attr('value', parseInt($inputVal) + 1);
	});
	
	$('.product__slider .card-item .bottom-part .add-to-card .minus').on('click', function(e) {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		if($inputVal < 1) {
			$input.attr('value', parseInt(0));
		} else {
			$input.attr('value', parseInt($inputVal) - 1);
		}
		
	});
	
	
	// dropdown category
	
	var $categoriesDropdown = $('.header__middle form .dropdown');
	$categoriesDropdown.click(function() {
		$(this).find('.search-category').slideToggle();
	});
	
	
	// hover main menu
	
	var $liCategories = $('.header__bottom nav ul li.catalog');
	var $categoryDropdown = $('.header__bottom nav .category-dropdown');
	$liCategories.on('click', function() {
		$categoryDropdown.slideToggle();
	})
	
	
	// hover plumbing
	
	var $plumbingContainer = $('.plumbing__slider .plumbing-slide'),
		$plumbingBtn = $plumbingContainer.find('.more');
	
	$plumbingContainer.hover(function() {
		$(this).find('.more').delay(500).animate({
			opacity: 1
		}, 1000);
	}, function() {
		$(this).find('.more').animate({
			opacity: 0
		}, 500);
	});
	
});


