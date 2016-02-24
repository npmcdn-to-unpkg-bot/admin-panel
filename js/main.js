$(document).ready(function() {
	var navToggleBtn = $('.nav-toggle-btn');
	navToggleBtn.on('click', function(ev) {
		$(this).toggleClass('open');
		$('.aside.nav-block, main').toggleClass('open');
	});
	// tags-block
	var $draggable = $('.tags-block .tag').draggabilly();
	var $grid = $('.tags-block').packery({
		itemSelector: '.tag',
		gutter: 5,
	});
	// draggable
	$grid.find('.tag').each( function(i, gridItem) {
		var draggie = new Draggabilly(gridItem);
		$grid.packery( 'bindDraggabillyEvents', draggie);
	});
	// item-order
	function orderItems() {
		var itemElems = $grid.packery('getItemElements');
		$(itemElems).each( function(i, itemElem) {
			$(itemElem).attr('data-order', i + 1);
		});
	}
});