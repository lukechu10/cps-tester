var rightClick = false;

$(() => {
	$("#cpsButton").click(() => {
		addClick();
	});

	// right click
	$("#cpsButton").contextmenu(() => {
		if(rightClick) {
			addClick();
			return false;
		}
		return true;
	});


	// right click button
	$("#rightClickToggle").click(() => {
		$("#rightClickToggle").toggleClass("positive");
		$("#rightClickToggle").toggleClass("negative");
		rightClick = !rightClick;

		if(rightClick) {
			$("#rightClickToggle").html("Disable Right Click");
		}
		else {
			$("#rightClickToggle").html("Enable Right Click");
		}
	});
});

var clicks = 0;
var clicksSinceCalculate = 0;
var cps = 0;

function addClick() {
	clicks++;
	clicksSinceCalculate++;
	$("#clickNumber").html(clicks);
}

setInterval(() => {
	// calculate cps
	cps = clicksSinceCalculate / 2; // 2 seconds
	clicksSinceCalculate = 0;
	$("#cpsNumber").html(cps);

	// update chart
	addCPS(cps);
}, 2000);