google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(getGraphicsDonutValues);

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(getGraphicsBarValues);



function getGraphicsDonutValues(){
  var graphicsDonutValues = Array.from({length: 4}, () => Math.floor(Math.random() * 50));
  
  
  DesenharGraficoDonut(graphicsDonutValues);
}

function getGraphicsBarValues(){
  var graphicsBarValues = Array.from({length: 6}, () => Math.floor(Math.random() * 50));
  var graphicsBar2Values = Array.from({length: 4}, () => Math.floor(Math.random() * 50));
  var graphicsBar3Values = Array.from({length: 4}, () => Math.floor(Math.random() * 50));
  var graphicsBar4Values = Array.from({length: 4}, () => Math.floor(Math.random() * 50));


  DesenharGraficoBarras(graphicsBarValues,graphicsBar2Values,graphicsBar3Values,graphicsBar4Values);
}

$(window).resize(function(){
  getGraphicsDonutValues();
  getGraphicsBarValues();
});

$(document).ready(function () {

  $("#sidebar").mCustomScrollbar({
       theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
      // open or close navbar
      $('#sidebar').toggleClass('active');
      // close dropdowns
      $('.collapse.in').toggleClass('in');
      // and also adjust aria-expanded attributes we use for the open/closed arrows
      // in our CSS
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

});


$(document).ready(function () {

  $("#sidebar").mCustomScrollbar({
       theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

});

function DesenharGraficoDonut(value) {
  
  // Graficos em Pizza
 
  var data = google.visualization.arrayToDataTable([
    ['Processos', 'processamento robos'],
    ['Robô 1',value[0]],
    ['Robô 2',value[1]],
    ['Robô 3',value[2]],
    ['Robô 4',value[3]]
  ]);
  
  var options = {
    pieHole: 0.4,
    legend:
    { 
      position: 'bottom', 
      alignment: 'center' ,
      orientation: 'horizontal',
    },
    colors: ['#ff9c4a','#6f87ff','#1480e1','#d5cde9'],
    backgroundColor: { fill:'transparent'},
    pieSliceText: 'value',
    pieSliceTextStyle: {
        bold: true,
        fontSize: 20
    },
    pieSliceBorderColor: { fill:'transparent' },
    fontName:'Oxygen',
  };
 

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}


function DesenharGraficoBarras(value1,value2,value3) {
  
    // Graficos Barra 1
  var data = google.visualization.arrayToDataTable([
    ['Processos', 'processamento robos'],
    ['Robô 1',value1[0]],
    ['Robô 2',value1[1]],
    ['Robô 3',value1[2]],
    ['Robô 4',value1[3]],
    ['Robô 5',value1[4]],
    ['Robô 6',value1[5]]
  ]);

    var options = {
        legend:
    { 
      position: 'none',
      alignment:'start' 
    },
      axes: {
        x: {
          0: { side: 'bottom'} // Top x-axis.
        }
      },
      bar: { groupWidth: "50%" },
      colors: ['#ff9c4a'],
 

      annotations: {
        textStyle: {
          fontName: 'Times-Roman',
          fontSize: 18,
          bold: true,
          italic: true,
          color: '#871b47',
          auraColor: '#d799ae',
          opacity: 0.8
        }
      },
      width_units: '%',
      backgroundColor: { fill:'transparent'},
    };

    var chart = new google.charts.Bar(document.getElementById('chart_bar'));
    chart.draw(data, google.charts.Bar.convertOptions(options));

    // Graficos Barra 2

    var data = google.visualization.arrayToDataTable([
      ['Processos', 'processamento robos'],
      ['Robô 1',value2[0]],
      ['Robô 2',value2[1]],
      ['Robô 3',value2[2]],
      ['Robô 4',value2[3]] 
    ]);

    var chart = new google.charts.Bar(document.getElementById('chart_bar2'));
    chart.draw(data, google.charts.Bar.convertOptions(options));


    //Graficos Barra 3

    
    var data = google.visualization.arrayToDataTable([
      ['Processos', 'processamento robos'],
      ['Robô 1',value3[0]],
      ['Robô 2',value3[1]],
      ['Robô 3',value3[2]],
      ['Robô 4',value3[3]]
    ]);

    var chart = new google.charts.Bar(document.getElementById('chart_bar3'));
    chart.draw(data, google.charts.Bar.convertOptions(options));

  };