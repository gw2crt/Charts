$(document).ready(function() {
    
Highcharts.chart('qSet1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Relationship<br>Former<br>University',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: 'Has Been Selected <b>' 
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%']
        }
    },
    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected'],
        name: 'Answer',
        innerSize: '70%',
        data: [
            ['Value 1 Low',     1],
            ['Value 2',         0],
            ['Value 3 Medium',  0],
            ['Value 4',         0],
            ['Value 5 High',    0],
        ]
    }]
});
    
    Highcharts.chart('qSet2', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: 'Relationship<br>Former<br>University',
        align: 'center',
        verticalAlign: 'middle',
        y: 40
    },
    tooltip: {
        pointFormat: 'Has Been Selected <b>' 
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected'],
        name: 'Answer',
        innerSize: '50%',
        data: [
            ['Value 1 Low',     0],
            ['Value 2',         0],
            ['Value 3 Medium',  0],
            ['Value 4',         0],
            ['Value 5 High',    1],
        ]
    }]
});

});