$(function() {
	$('.home-slider').slick({
		dots: true
	});
	$('.product__slider.active').slick({
		prevArrow: $('.product .arrows li.prev'),
		nextArrow: $('.product .arrows li.next')
	});
	$('.plumbing__slider, .catalog__slider').slick({
		prevArrow: $('.plumbing .caption-row .arrows-navigation li.prev, .catalog-arrows li.prev'),
		nextArrow: $('.plumbing .caption-row .arrows-navigation li.next, .catalog-arrows li.next')
	});
	
	$('.related-products-slider').slick({
		prevArrow: $('.product-inner .caption-row .arrows-navigation li.prev'),
		nextArrow: $('.product-inner .caption-row .arrows-navigation li.next')
	});
	
	$('.ft-slider').slick({
		slidesToShow: 5
	});
	
	// Slider main product

	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  focusOnSelect: true
	});

	
	// gallery products
	 
//    $('.product-inner .slider-product.slick-initialized.slick-slider .slick-slide .container-image img .popup-link').magnificPopup({
//		delegate: 'a', 
//		type: 'image'
//	});

	
	// tabs
	
	var $productTabs = $('.product .tabs a'),
		$sliders = $('.product__slider');
	
	$productTabs.click(function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$sliders.removeClass('active').eq($(this).index()).addClass('active');
		$('.product__slider').slick('setPosition');
		$('.product__slider').slick();
	});
	
	
	var $productDescTabs = $(".product-inner .tabs a");
	$productDescTabs.click(function(e) {
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	// counter for products
	
	$('.product__slider .card-item .bottom-part .add-to-card .plus, .catalog .sort-products .card-item .bottom-part .add-to-card .plus').on('click', function(e) {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		$input.attr('value', parseInt($inputVal) + 1);
	});
	
	$('.product__slider .card-item .bottom-part .add-to-card .minus, .catalog .sort-products .card-item .bottom-part .add-to-card .minus').on('click', function(e) {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		if($inputVal < 1) {
			$input.attr('value', parseInt(0));
		} else {
			$input.attr('value', parseInt($inputVal) - 1);
		}
	});
	
	$('.pannier .table tbody td.count .adding-counter .plus, .checkout-basket .checkout-form.basket-container .products-container .adding-counter .plus').click(function() {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		$input.attr('value', parseInt($inputVal) + 1);
	});
	
	$('.pannier .table tbody td.count .adding-counter .minus, .checkout-basket .checkout-form.basket-container .products-container .adding-counter .minus').click(function() {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		if($inputVal < 1) {
			$input.attr('value', parseInt(0));
		} else {
			$input.attr('value', parseInt($inputVal) - 1);
		}
	});
	
	$('.product-inner .description-product .counter .adding-card .minus').click(function() {
		var $input = $(this).siblings('input'),
		$inputVal = $input.attr('value');
		if($inputVal < 1) {
			$input.attr('value', parseInt(0));
		} else {
			$input.attr('value', parseInt($inputVal) - 1);
		}
	});
	
	$('.product-inner .description-product .counter .adding-card .plus').click(function() {
		var $input = $(this).siblings('input'),
			$inputVal = $input.attr('value');
		$input.attr('value', parseInt($inputVal) + 1);
	});
	
	
	// dropdown category
	
	var $categoriesDropdown = $('.header__middle form .dropdown');
	$categoriesDropdown.click(function() {
		$(this).find('.search-category').slideToggle();
	});
	
	// dropdown order select
	
	var $orderSelect = $('.catalog .sort-container .order-select');
	$orderSelect.click(function() {
		var $dropdown = $(this).find('.order-dropdown');
		$dropdown.width($(this).outerWidth() - 7 + "px");
		$dropdown.slideToggle();
	});
	
	// dropdown digit select
	var $digitSelect = $('.catalog .sort-container .digit-select');
	$digitSelect.click(function() {
		var $dropdown = $(this).find('.digit-dropdown');
		$dropdown.width($(this).outerWidth() - 7 + "px");
		$dropdown.slideToggle();
	});
	
	
	// delete row on basket
	
	var $delBtn = $('.pannier .table tbody td.count .delete-card');
	$delBtn.click(function() {
		$(this).closest('tr').remove();
	});
	
	
	
	// coupon accordion's
	
	var $couponBtn = $('.pannier .chance-accordion.coupon span');
	var $sertificatBtn = $('.pannier .chance-accordion.sertificat span');
	var $accordionCoupon = $('.pannier .accordion-form.coupon');
	var $accordionSertificat = $('.pannier .accordion-form.sertificat');
	$couponBtn.click(function() {
		$accordionCoupon.slideToggle();
	});
	$sertificatBtn.click(function() {
		$accordionSertificat.slideToggle();
	});
	
	// hover main menu
	
	var $liCategories = $('.header__bottom nav ul li.catalog');
	var $categoryDropdown = $('.header__bottom nav .category-dropdown');
	$liCategories.on('click', function() {
		$categoryDropdown.slideToggle();
	})
	
	
	// hover plumbing
	
	var $plumbingContainer = $('.plumbing__slider .plumbing-slide, .catalog__slider .plumbing-slide'),
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
	
	
	// CHECKOUT SELECT'S
	
	var $selectCountry = $('.checkout-basket .checkout-form.adress-driver .custom-select-country');
	var $selectInput = $selectCountry.find('input');
	var $selectOptions = $selectCountry.find('ul li a');
	
	$selectCountry.click(function() {
		$(this).find('ul').slideToggle();
		$(this).toggleClass('show');
	});
	
	$selectOptions.click(function(e) {
		e.preventDefault();
		var $valOption = $(this).html();
		$selectInput.attr('value', $valOption);
	});

	
	
	/* Custom scrollbar for select's */
	
	$('.checkout-basket .checkout-form.adress-driver .custom-select-country ul').mCustomScrollbar({
		 axios: "y"
	});
	
	/* Custom scrollbar for basket container */
	$('.checkout-basket .checkout-form.basket-container .products-container').mCustomScrollbar();
	
	
	var $delRows = $('.checkout-basket .checkout-form.basket-container .products-container .delete-card');
	$delRows.click(function() {
		$(this).closest('.row').remove();
	});
	
	var $seltCity = $('.checkout-basket .checkout-form.adress-driver .custom-select-city');
	console.log($seltCity);
	$seltCity.click(function() {
		$(this).find('ul').slideToggle();
	});
	
});


