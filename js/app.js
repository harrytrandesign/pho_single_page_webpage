$(document).ready(function() {
	$('#menu-list').hide();

	$('#pull-menu').on('click', function(e) {
		e.preventDefault();
		$('#menu-list').slideDown(1000);
	});

	$('#close-menu').click(function() {	
		$('#menu-list').slideUp(1000).hide(1000);
	});

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});