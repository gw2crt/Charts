$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'qSet1',
            polar: true,
            type: 'line'
        },
        title: {
            text: 'Do you have difficulty managing any part of the following',
            x: -80
        },
        credits: {
            enabled: false
        },
        pane: {
            size:'80%'
        },
        xAxis: {
        categories: ['Parenthood', 'Alchol', 'Drugs', 'Dating', 'Being Single',
                'Finances', 'Friendship', 'Family'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'hexagon',
        lineWidth: 0,
        min: 0
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>Scale: {point.y:,.0f}</b><br/>'
    },

    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },
        
    series: [{ }]
        
    };

    $.getJSON('data.json', function(data) {
        options.series[0].data = data;
        var chart = new Highcharts.Chart(options);
        
    });

});