google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(DesenharGraficoDonut);

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(DesenharGraficoBarras);

function DesenharGraficoDonut() {
  
  // Graficos em Pizza
  
  var value =[10,12,25,3] 
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


function DesenharGraficoBarras() {
    var data = new google.visualization.arrayToDataTable([
      ['', ''],
      ["Robô 1", 44],
      ["Robô 2", 31],
      ["Robô 3", 12],
      ["Robô 4", 10],
      ["Robô 5", 3],
      ["Robô 6", 15]
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
          // The color of the text.
          color: '#871b47',
          // The color of the text outline.
          auraColor: '#d799ae',
          // The transparency of the text.
          opacity: 0.8
        }
      }

    };

    var chart = new google.charts.Bar(document.getElementById('chart_bar'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
  };