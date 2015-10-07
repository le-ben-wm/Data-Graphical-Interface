google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
    var data = google.visualization.arrayToDataTable([
        ['Country', '2010 Biofuels', '2000 Biofuels'],
        ['United States', 887.6242, 105.54],
        ['Brazil', 527.32212, 183.8867],
        ['Germany', 62, 4.3],
        ['Canada', 26.4, 3.7],
        ['Spain', 24, 1.6],
    ]);

    var options = {
        title: 'Biofuels Consumed and Produced',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Barrels Consumed (thousand/day)',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Country',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            }
        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}