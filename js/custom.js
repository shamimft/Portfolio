$('.counter').counterUp({
    delay: 10,
    time: 1000
});

new VenoBox({
    selector: '.venobox'
  });

//   =======slider=====

$('.testimonial_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  });
 

//   =======slider=====

// ========= marquee===========
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true
});

// ========= marquee===========


//=============scroolrevel======
ScrollReveal({
  distance: '80px',
  reset:true,
  duration:2500,
  dilay:400 
});


ScrollReveal().reveal('.banner_text,.service_header,.message,.education_header,.portfolio_header,.testimonial_header,.blog_header,#f_banner,#footer',{  dilay:500 ,origin: 'right',});