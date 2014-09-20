//rslide jquery
$(function(){
	$(".rslides").responsiveSlides({
  		auto: true,             
  		speed: 500,           
  		timeout: 4000,          
  		nav:true  
	});
});
//the scroll function
$(document).ready(
	function(){
		$('.rslides ul img').click(
			function(){
				var id = $(this).attr('id').split('-')[1];
				var distance = $('.home-'+ id).offset();
				$('html, body').animate({scrollTop: distance.top}, 500);
			}
		);
	}
);
//still have to make the pic like the one on google web store
$(document).ready(
	function()
	{
		$('.home_products').hover(
			function(){
				var id = $(this).attr('id').split('-')[1];
				$('.slideUp-'+id).fadeIn(100);
			},
			function(){
				var id = $(this).attr('id').split('-')[1];
				$('.slideUp-'+id).fadeOut(100);				
			}
		);
	}
);
//regular Java script
