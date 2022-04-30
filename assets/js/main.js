(function ($) {
    'use strict';

    /*------------- preloader js --------------*/
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();

	$(window).on("load", function () {
		background();
	});

	// scroll to top js
	var scroll = $(".go-top");
	scroll.on('click', function() {
		$('html , body').animate({
			scrollTop: 0
		}, 300);
	});

    // background image js
	function background() {
			var img=$('.bg_img');
			img.css('background-image', function () {
			var bg = ('url(' + $(this).data('background') + ')');
			return bg;
		});
	}

	// active mobile-menu
	jQuery('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.mobile-menu'
	});

	// toggle search bar
	$('.search .search__trigger .open').click(function () {
		$(".search .search__trigger .open").hide();
		$(".search .search__trigger .close").show();
		$('.search__form').addClass('active');
	});
	$('.search .search__trigger .close').click(function () {
		$(".search .search__trigger .open").show();
		$(".search .search__trigger .close").hide();
		$('.search__form').removeClass('active');
	});

	// Side menu info
	$(".hamburger-trigger").on("click", function (e) {
		e.preventDefault();
		$(".side-info-wrapper").toggleClass("show");
		$("body").addClass("on-side");
		$('.overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".side-info__close > a").on("click", function (e) {
		e.preventDefault();
		$(".side-info-wrapper").removeClass("show");
		$("body").removeClass("on-side");
		$('.overlay').removeClass('active');
		$('.hamburger-trigger').removeClass('active');
	});

	$('.overlay').on('click', function () {
		$(this).removeClass('active');
		$(".side-info-wrapper").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-trigger').removeClass('active');
	});

	// cart info
	$(".cart-trigger").on("click", function (e) {
		e.preventDefault();
		$(".cart-bar-wrapper").toggleClass("show");
		$("body").addClass("on-side");
		$('.overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".cart-bar__close > a").on("click", function (e) {
		e.preventDefault();
		$(".cart-bar-wrapper").removeClass("show");
		$("body").removeClass("on-side");
		$('.overlay').removeClass('active');
		$('.cart-trigger').removeClass('active');
	});

	$('.overlay').on('click', function () {
		$(this).removeClass('active');
		$(".cart-bar-wrapper").removeClass("show");
		$("body").removeClass("on-side");
		$('.cart-trigger').removeClass('active');
	});

	// feature slider
	var owl = $('.feature__slider');
	owl.owlCarousel({
		loop: true,
		margin: 30,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsiveClass:true,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			768: {
				items: 3
			},
			992: {
				items: 3
			},
			1440: {
				items: 4
			}
		}
	});

	// testemonial slider
	var owl = $('.testimonial__active');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsiveClass:true,
	});

	//  product popup
	$('.view').on('click',function() {
		$('.overlay, .product-popup-1').addClass('show-popup');
	});

	$('.product-highlight__trigger').on('click',function() {
		$('.overlay, .popup-coffe-mechine').addClass('show-popup');
	});

	$('.overlay,.product-p-close').on('click',function() {
		$('.overlay, .popup-coffe-mechine, .product-popup').removeClass('show-popup');
	});

	// Activate lightcase
	$('a[data-rel^=lightcase]').lightcase();

	// isotop active
	$('.popular-menu__grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.popular-menu__grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});

		// filter items on button click
		$('.popular-menu__filter').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

	});

	// isotop masonary active
	$('.popular-menu__masonary').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.popular-menu__masonary').isotope({
			itemSelector: '.popular-menu__item',
			percentPosition: true,
			masonry: {
				columnWidth: '.popular-menu__item',
				horizontalOrder: true,
			}
		});

		// filter items on button click
		$('.popular-menu__filter').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

	});

	//for menu active class
	$('.popular-menu__filter button').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	$('.pp__item').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.pp__item').removeClass('active');
	});

	// range slider activation
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 10000,
		values: [0, 10000],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});

	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	" - $" + $("#slider-range").slider("values", 1));

	// map active
	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(40.74393298737726, -73.967833),
			styles: [{
				"stylers": [{
					"color": "#13131A"
				}]
			}, {
				"featureType": "water",
				"elementType": "labels",
				"stylers": [{
					"visibility": "on",
					"color": "#fff"
				}]
			}, {
			}, {
				"featureType": "poi.business",
				"elementType": "labels",
				"stylers": [{
					"visibility": "on",
					"color": "#f1f1f1"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [{
					"lightness": 100,
					"color": "#fff"
				}, {
					"visibility": "simplified"
				}]
			}]
		};
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('reservemap');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);


	}
	if ($('#reservemap').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}

	// map active
	function contactcmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 15,
			scrollwheel: false,
			center: new google.maps.LatLng(40.74393298737726, -73.967833),
			styles: [{
				"stylers": [{
					"color": "#CDCDCD"
				}]
			}, {
				"featureType": "water",
				"elementType": "labels",
				"stylers": [{
					"visibility": "on",
					"color": "#000000"
				}]
			}, {
			}, {
				"featureType": "poi.business",
				"elementType": "labels",
				"stylers": [{
					"visibility": "on",
					"color": "#000000"
				}]
			}, {
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [{
					"lightness": 100,
					"color": "#000000"
				}, {
					"visibility": "simplified"
				}]
			}]
		};
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contactmap');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);


	}
	if ($('#contactmap').length != 0) {
		google.maps.event.addDomListener(window, 'load', contactcmap);
	}

})(jQuery);
