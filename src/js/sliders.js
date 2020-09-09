$('.gallery-offer__body').slick({
	lazyLoad: 'ondemand',
	dots: false,
	arrows: true,
	infinite: true,
	speed: 600,
	prevArrow: '.gallery-offer__arrow_prev',
	nextArrow: '.gallery-offer__arrow_next',
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 630,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 485,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.slider-federal').slick({
	lazyLoad: 'ondemand',
	dots: false,
	arrows: true,
	infinite: true,
	speed: 600,
	prevArrow: '.federal-slider-arrow_prev',
	nextArrow: '.federal-slider-arrow_next',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				// dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

$('.slider-parents').slick({
	lazyLoad: 'ondemand',
	dots: false,
	arrows: true,
	infinite: true,
	speed: 600,
	prevArrow: '.parents-slider-arrow_prev',
	nextArrow: '.parents-slider-arrow_next',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				// dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});