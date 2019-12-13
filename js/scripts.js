$(document).ready(function() {
	$('#comSciHeader').click(function() {
		if ($('#comSciHeader').hasClass('collapsed')) {
			$('#comSciHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#comSciHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#comSciHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#comSciHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#econHeader').click(function() {
		if ($('#econHeader').hasClass('collapsed')) {
			$('#econHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#econHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#econHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#econHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#elecEngHeader').click(function() {
		if ($('#elecEngHeader').hasClass('collapsed')) {
			$('#elecEngHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#elecEngHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#elecEngHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#elecEngHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#engHeader').click(function() {
		if ($('#engHeader').hasClass('collapsed')) {
			$('#engHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#engHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#engHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#engHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#scienceHeader').click(function() {
		if ($('#scienceHeader').hasClass('collapsed')) {
			$('#scienceHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#scienceHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#scienceHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#scienceHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#mathHeader').click(function() {
		if ($('#mathHeader').hasClass('collapsed')) {
			$('#mathHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#mathHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#mathHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#mathHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#mechEngHeader').click(function() {
		if ($('#mechEngHeader').hasClass('collapsed')) {
			$('#mechEngHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#mechEngHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#mechEngHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#mechEngHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#tronHeader').click(function() {
		if ($('#tronHeader').hasClass('collapsed')) {
			$('#tronHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#tronHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#tronHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#tronHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#sfwrEngHeader').click(function() {
		if ($('#sfwrEngHeader').hasClass('collapsed')) {
			$('#sfwrEngHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#sfwrEngHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#sfwrEngHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#sfwrEngHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});

	$('#statsHeader').click(function() {
		if ($('#statsHeader').hasClass('collapsed')) {
			$('#statsHeader').children('h4').children('span').removeClass('fa-plus-circle');
			$('#statsHeader').children('h4').children('span').addClass('fa-minus-circle');
		} else {
			$('#statsHeader').children('h4').children('span').removeClass('fa-minus-circle');
			$('#statsHeader').children('h4').children('span').addClass('fa-plus-circle');
		}
	});
})