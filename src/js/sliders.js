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

$('.slider-federal__body').slick({
	lazyLoad: 'ondemand',
	dots: false,
	arrows: true,
	infinite: true,
	speed: 600,
	prevArrow: '.slider-federal__arrow_prev',
	nextArrow: '.slider-federal__arrow_next',
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
			breakpoint: 485,
			settings: {
				slidesToShow: 1,
			}
		}
	]
});

// $('.slider-quotes__body').slick({
// 	lazyLoad: 'ondemand',
// 	dots: false,
// 	arrows: true,
// 	infinite: true,
// 	speed: 1200,
// 	nextArrow: '.control-slider-quotes__circle',
// 	prevArrow: '',
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	fade: true,
// 	adaptiveHeight: true
// });