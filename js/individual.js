$( document ).ready(function() {
    console.log( "ready!" );
    
Highcharts.chart('age', {

    chart: {
        type: 'solidgauge',
        backgroundColor: '#eceeef',
        marginTop: 50
    },

    title: {
        text: '',
        style: {
            fontSize: '20px'
        }
    },

    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '18px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
        positioner: function (labelWidth) {
            return {
                x: 100 - labelWidth / 2,
                y: 175
            };
        } 
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, ]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Age',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 26
        }]
    }]
},

/**
 * In the chart load callback, add icons on top of the circular shapes
 */
function callback() {

    // Move icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 26)
        .add(this.series[2].group);
}); 
    
    // End of Doc Ready
    
});


function question1() {
    
    Highcharts.chart('qSet2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Background'
    },
    xAxis: {
        categories: [
            'Never Married',
            'Married',
            'Single',
            'Divorced',
            'Widowed',
            'Significent Partner',
            'Live In'
        ]
    },
    yAxis: [{
        min: 0,
        max: 5,
        tickAmount: 6,
        title: {
            text: 'Number of Children'
        }
    }, {
        title: {
            text: ''
        },
        opposite: true
    }],
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Black',
        color: 'rgba(165,170,217,1)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '',
            valueSuffix: ''
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'African American',
        color: 'rgba(126,86,134,.9)',
        data: [1, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '',
            valueSuffix: ''
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'Pacific Islander ',
        color: 'rgba(248,161,63,1)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '',
            valueSuffix: ''
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'Asian',
        color: 'rgba(186,60,61,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
       tooltip: {
            valuePrefix: '',
            valueSuffix: ''
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: ' Caucasian',
        color: 'rgba(126,86,134,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '',
            valueSuffix: ''
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
        }, {
        name: 'Other',
        color: 'rgba(126,86,134,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '',
            valueSuffix: ''
        },
        pointPadding: 0,
        pointPlacement: 0
    },]
});

}

function question2() {
    
    Highcharts.chart('qSet3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Childhood'
    },
    xAxis: {
        categories: [
            'Both Parents',
            'Mother',
            'Father',
            'Grandparents',
            'Step Parent',
            'Sibling',
            'Adoptive Parent'
        ]
    },
    yAxis: [{
        min: 0,
        max: 200,
        tickAmount: 5,
        title: {
            text: 'Annual Income'
        }
    }, {
        title: {
            text: ''
        },
        opposite: true
    }],
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false,
            borderWidth: 0
        }
    },
    series: [{
        name: 'City/Urban',
        color: 'rgba(165,170,217,1)',
        data: [75, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' K'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'Small Town',
        color: 'rgba(126,86,134,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' K'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'Rural ',
        color: 'rgba(248,161,63,1)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' K'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'Suburban',
        color: 'rgba(186,60,61,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
       tooltip: {
            valuePrefix: '$',
            valueSuffix: ' k'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
    }, {
        name: 'Military',
        color: 'rgba(126,86,134,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' K'
        },
        pointPadding: 0.3,
        pointPlacement: 0.2
        }, {
        name: 'Moved Frequently',
        color: 'rgba(126,86,134,.9)',
        data: [0, 0, 0, 0, 0, 0, 0],
        tooltip: {
            valuePrefix: '$',
            valueSuffix: ' K'
        },
        pointPadding: 0,
        pointPlacement: 0
    },]
});
    
}

question1();
question2();

