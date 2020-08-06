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
	responsive: [
		{
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

  $('.slider-lots__body').slick({
	lazyLoad: 'ondemand',
	dots: false,
	arrows: true,
	infinite: true,
	speed: 600,
	prevArrow: '.control-slider-lots__arrow_prev',
	nextArrow: '.control-slider-lots__arrow_next',
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 768,
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

  $('.slider-quotes__body').slick({
	lazyLoad: 'ondemand',
	dots: false,
	arrows: true,
	infinite: true,
	speed: 1200,
	nextArrow: '.control-slider-quotes__circle',
	prevArrow: '',
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	adaptiveHeight: true
  });