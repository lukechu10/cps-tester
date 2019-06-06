var myChart = new Object();

$(() => {
	var ctx = document.getElementById('chart').getContext('2d');
	myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['18 seconds', '16 seconds', '14 seconds', '12 seconds', '10 seconds', '8 seconds', '6 seconds', '4 seconds', '2 seconds', '0 seconds'],
			datasets: [{
				label: '# Clicks Per Second',
				data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});
});

function addCPS(cps) {
	myChart.data.datasets[0].data.shift();
	myChart.data.datasets[0].data.push(cps);
	myChart.update();
}

function createChart() {

}
