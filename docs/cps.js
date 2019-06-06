$(() => {
	$("#cpsButton").click(() => {
		addClick();
	});

	// right click
	$("#cpsButton").contextmenu(() => {
		addClick();
		return false;
	});


	// right click button
	$("#rightClickToggle").click(() => [

	])
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