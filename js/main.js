/*Сортировка элементов*/
$(document).ready(function(){
		$(".radio").click(function() {
		$(".triangle").hide();			
		$(this).find('.triangle').show();
		// if ($('.triangle').hasClass('triangle_down')){
				// $(this).find('.triangle').removeClass('triangle_down');
				// $(this).find('.triangle').addClass('triangle_up');
			// }
		// else {
				// $(this).find('.triangle').removeClass('triangle_up');
				// $(this).find('.triangle').addClass('triangle_down');
			// };
		$(".triangle").toggleClass("triangle_down triangle_up");
		$(".radio_select").removeClass("active");
		$(this).find(".radio_select").addClass("active");
		
	});
});


