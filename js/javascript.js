$( document ).ready(function() {
    console.log( "ready!" );
    
    
Highcharts.chart('qSet1', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Do you have difficulty Managing any part of the following:',
        x: -80
    },
    credits: {
        enabled: false
    },
    pane: {
        size: '80%'
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

    series: [{
        name: 'Player Name',
        data: [1, 5, 1, 3, 4, 0, 2, 1],
        pointPlacement: 'on'
    }]

});
    
    Highcharts.chart('qSet2', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Workshops interested in:',
        x: -80
    },
    credits: {
        enabled: false
    },
    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Financial Education', 'Family Relationships', 'Dealing with Social Media', 'Psychology Education', 'Leveraging my NFL career','Paycheck Breakdown', 'Resume Workshop', 'Networking 101', 'Post Football Plans', 'Nutrition Education', 'Post Grad Degree' ],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'hexagon',
        lineWidth: 1,
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

    series: [{
        name: 'Player Name',
        data: [5, 5, 0, 0, 5, 0, 0, 0, 5, 0, 0],
        pointPlacement: 'on'
    }]

});
    
Highcharts.chart('qSet3', {

    chart: {
        polar: true,
        type: 'line'
    },

    title: {
        text: 'Final Industry: ',
        x: -80
    },
    credits: {
        enabled: false
    },
    pane: {
        size: '80%'
    },

    xAxis: {
        categories: ['Education', 'Real Estate', 'Sports Coaching', 'Health Care', 'Broadcast', 'Social Services', 'Sales', 'Communications', 'Human Resources', 'Government', 'Engineering', 'Financial Services'],
        tickmarkPlacement: 'off',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'hexagon',
        lineWidth: 1,
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

    series: [{
        name: 'Player Name',
        data: [2, 4, 0, 0, 0, 0, 0, 1, 0, 3, 0, 5],
        pointPlacement: 'on'
    }]

});    
    
Highcharts.chart('qSet4', {

    chart: {
        type: 'bar'
    },
    title: {
        text: 'Dealing with Media'
    },
    subtitle: {
        text: 'How well do you Deal with the Media'
    },
    xAxis: {
        categories: ['Dislike', 'OK', 'Comfortable', 'Enjoy'],
        title: {
            text: null
        }
    },
    yAxis: {
    	visible: false        
    },
    tooltip: {
        valueSuffix: ''
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Individuals Answer',
        data: [0, 0, 1, 0]
    }]
});
    

    
Highcharts.chart('qSet5', {

    chart: {
        type: 'heatmap',
        marginTop: 160,
        marginBottom: 160,
        plotBorderWidth: 5
    },


    title: {
        text: 'How well do you Network'
    },
     subtitle: {
        text: 'On a scale of 1 - 10 How well do you network with people outside of football?'
    },

    xAxis: {
        categories: ['']
    },

    yAxis: {
        categories: ['Player Name'],
        title: null
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[2]
    },

series: [{
        name: '',
        borderWidth: 1,
        data: [[1,0,0],[2,0,0],[3,0,0],[4,0,0],[5,0,0],[6,0,0],[7,0,0],[8,0,0],[9,0,1],[10,0,0]],
        dataLabels: {
            enabled: false,
            color: '#000000'
        }
    }]

}); 


    // End of Doc Ready
    
});