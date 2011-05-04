steal
  .plugins("funcunit/qunit", "jquery/dom/range", "jquery/dom/selection").then(function(){
  	
module("jquery/dom/range");

test("basic range", function(){
	$("#qunit-test-area")
		.html("<p id='1'>0123456789</p>");
	$('#1').selection(1,5);
	var range = $.Range.current();
	equals(range.start().offset, 1, "start is 1")
	equals(range.end().offset, 5, "end is 5")
});

	test("nested range", function(){
		$("#qunit-test-area")
			.html("<div id='2'>012<div>3<span>4</span>5</div></div>");
		$('#2').selection(1,5);
		var range = $.Range.current();
		equals(range.start().container.data, "012", "start is 012")
		equals(range.end().container.data, "4", "last char is 4")
	});
	
	test("rect", function(){
	$("#qunit-test-area")
		.html("<p id='1'>0123456789</p>");
	$('#1').selection(1,5);
	var range = $.Range.current(),
		rect = range.rect();
	ok(rect.height, "height non-zero")
	ok(rect.width, "width non-zero")
	ok(rect.left, "left non-zero")
	ok(rect.top, "top non-zero")
	console.log(rect)
	});
	
	test("collapsed rect", function(){
	$("#qunit-test-area")
		.html("<p id='1'>0123456789</p>");
	$('#1').selection(1,5);
	var range = $.Range.current(),
		start = range.clone().collapse(),
		rect = start.rect();
	var r = start.rect();
	ok(rect.height, "height non-zero")
	ok(rect.width == 0, "width zero")
	ok(rect.left, "left non-zero")
	ok(rect.top, "top non-zero")
	console.log(start, rect)
	});

});