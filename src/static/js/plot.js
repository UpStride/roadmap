// Multiple lines plot
function plotMultipleLines(id, inputdata1, inputdata2, inputlabels, ylabel,
  bdColor1, bckgColor1, hoverColor1,
  bdColor2, bckgColor2, hoverColor2,
  pRadius, xtype='', ytype='', savegraphid='') {
  var ctx = document.getElementById(id).getContext('2d');
  if (xtype != '') {
      xaxesopt = [{
          type: xtype
      }]
  } else {
    xaxesopt = [{}]
  }
  if (ytype != '') {
      yaxesopt = [{
          type: ytype
      }]
  } else {
    yaxesopt = [{}]
  }

  const verticalLinePlugin = {
    getLinePosition: function (chart, pointIndex) {
        const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
        const data = meta.data;
        return data[pointIndex]._model.x;
    },
    renderVerticalLine: function (chartInstance, pointIndex) {
        const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
        const scale = chartInstance.scales['y-axis-0'];
        const context = chartInstance.chart.ctx;

        // render vertical line
        context.beginPath();
        context.strokeStyle = '#ff0000';
        context.moveTo(lineLeftOffset, scale.top);
        context.lineTo(lineLeftOffset, scale.bottom);
        context.stroke();

        // write label
        context.fillStyle = "#ff0000";
        context.textAlign = 'center';
        // context.fillText('MY TEXT', lineLeftOffset, (scale.bottom - scale.top) / 2 + scale.top);
    },

    afterDatasetsDraw: function (chart, easing) {
        if (chart.config.lineAtIndex) {
            chart.config.lineAtIndex.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
        }
    }
  };

  Chart.plugins.register(verticalLinePlugin);

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: inputlabels, //["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
              {
                  data: inputdata1,
                  label: ylabel,
                  borderColor: bdColor1,
                  backgroundColor: bckgColor1, //bckgColor["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                  hoverBackgroundColor: hoverColor1,//["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                  fill: true,
                  pointStyle:'circle',
                  pointRadius:pRadius
                  // pointHoverBorderColor:'rgba(255,165,0, 1)',
                  // pointHoverBackgroundColor:'rgba(255,165,0, 1)'
              },
              {
                  data: inputdata2,
                  label: ylabel,
                  borderColor: bdColor2,
                  backgroundColor: bckgColor2, //bckgColor["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                  hoverBackgroundColor: hoverColor2,//["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                  fill: false,
                  pointStyle:'circle',
                  pointRadius:pRadius
                  // pointHoverBorderColor:'rgba(255,165,0, 1)',
                  // pointHoverBackgroundColor:'rgba(255,165,0, 1)'
              }
          ]
      },
      options: {
          responsive: true,
          scales: {
            xAxes: xaxesopt,
            yAxes: yaxesopt
          },
          animation: {
            onComplete: function(animation){
              document.querySelector(savegraphid).setAttribute('href', this.toBase64Image());
            }
          }
      },
      lineAtIndex: [2,4,8]
  });
}

// Simple line plot
function plotSimpleLine(id, inputdata, inputlabels, verticalLines, ylabel, bdColor, bckgColor, hoverColor, pRadius, xtype='', ytype='', savegraphid='') {
  var ctx = document.getElementById(id).getContext('2d');
  if (xtype != '') {
      xaxesopt = [{
          type: xtype
      }]
  } else {
    xaxesopt = [{}]
  }
  if (ytype != '') {
      yaxesopt = [{
          type: ytype
      }]
  } else {
    yaxesopt = [{}]
  }

  const verticalLinePlugin = {
    getLinePosition: function (chart, pointIndex) {
        const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
        const data = meta.data;
        return data[pointIndex]._model.x;
    },
    renderVerticalLine: function (chartInstance, pointIndex) {
        const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex);
        const scale = chartInstance.scales['y-axis-0'];
        const context = chartInstance.chart.ctx;

        // render vertical line
        context.beginPath();
        context.strokeStyle = '#ff0000';
        context.moveTo(lineLeftOffset, scale.top);
        context.lineTo(lineLeftOffset, scale.bottom);
        context.stroke();

        // write label
        context.fillStyle = "#ff0000";
        context.textAlign = 'center';
        // context.fillText('MY TEXT', lineLeftOffset, (scale.bottom - scale.top) / 2 + scale.top);
    },

    afterDatasetsDraw: function (chart, easing) {
        if (chart.config.lineAtIndex) {
            chart.config.lineAtIndex.forEach(pointIndex => this.renderVerticalLine(chart, pointIndex));
        }
    }
  };

  Chart.plugins.register(verticalLinePlugin);

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: inputlabels, //["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
              {
                  data: inputdata,
                  label: ylabel,
                  borderColor: bdColor,
                  backgroundColor: bckgColor, //bckgColor["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                  hoverBackgroundColor: hoverColor,//["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                  fill: true,
                  pointStyle:'circle',
                  pointRadius:pRadius
                  // pointHoverBorderColor:'rgba(255,165,0, 1)',
                  // pointHoverBackgroundColor:'rgba(255,165,0, 1)'
              }
          ]
      },
      options: {
          responsive: true,
          scales: {
            xAxes: xaxesopt,
            yAxes: yaxesopt
          },
          animation: {
            onComplete: function(animation){
              document.querySelector(savegraphid).setAttribute('href', this.toBase64Image());
            }
          }
      },
      lineAtIndex: verticalLines
  });
}

// Line plot with filled background
function plotLine(id, inputdata, inputlabels, ylabel, bckgColor, hoverColor, xtype='', ytype='', savegraphid='') {
  var ctx = document.getElementById(id).getContext('2d');
  if (xtype != '') {
      xaxesopt = [{
          type: xtype
      }]
  } else {
    xaxesopt = [{}]
  }
  if (ytype != '') {
      yaxesopt = [{
          type: ytype
      }]
  } else {
    yaxesopt = [{}]
  }

  var myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: inputlabels, //["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
              {
                  data: inputdata,
                  label: ylabel,
                  borderColor: bckgColor,
                  backgroundColor: bckgColor, //bckgColor["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                  hoverBackgroundColor: hoverColor,//["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
                  fill: true,
                  pointStyle:'line'
              }
          ]
      },
      options: {
          responsive: true,
          scales: {
            xAxes: xaxesopt,
            yAxes: yaxesopt
          },
          animation: {
            onComplete: function(animation){
              document.querySelector(savegraphid).setAttribute('href', this.toBase64Image());
            }
          }
      }
  });
}

// Doughnut chart
function plotDoughnut(id, inputdata, inputlabels, bckgColor, hoverColor, savegraphid='') {
  var ctxD = document.getElementById(id).getContext('2d');
  var myLineChart = new Chart(ctxD, {
      type: 'doughnut',
      data: {
          labels: inputlabels, //["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
              {
                  data: inputdata, //[300, 50, 100, 40, 120],
                  backgroundColor: bckgColor, //["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                  hoverBackgroundColor: hoverColor //["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
              }
          ]
      },
      options: {
          responsive: true,
          animation: {
            onComplete: function(animation){
              document.querySelector(savegraphid).setAttribute('href', this.toBase64Image());
            }
          }
      }
  });
}

// Bar chart
function plotBar(id, inputdata, inputlabels, ylabel, barColor, barBorderColor, xtype='', ytype='', savegraphid='') {
  var ctxB = document.getElementById(id).getContext('2d');
  if (xtype != '') {
      xaxesopt = [{
          type: xtype
      }]
  } else {
    xaxesopt = [{}]
  }
  if (ytype != '') {
      yaxesopt = [{
          type: ytype,
          ticks: {
              beginAtZero:true
          }
      }]
  } else {
    yaxesopt = [{
      ticks: {
          beginAtZero:true
      }
    }]
  }
  var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: inputlabels,
        datasets: [{
            label: ylabel,
            data: inputdata,//[12, 19, 3, 5, 2, 3],
            backgroundColor: barColor, //'rgba(255, 99, 132, 0.2)',
            borderColor: barBorderColor, //'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    },
    options: {
      scales: {
        xAxes: xaxesopt,
        yAxes: yaxesopt
      },
      animation: {
        onComplete: function(animation){
          document.querySelector(savegraphid).setAttribute('href', this.toBase64Image());
        }
      }
    }
  });
}

// Stacked Bar chart
function plotStackedBar(id, inputdata, inputlabels, ylabel, barColor, hoverColor, maxyvalue, savegraphid='') {
  var ctxB = document.getElementById(id).getContext('2d');
  var datasets = [];
  for (i=0; i < inputdata.length; i++) {
    datasets.push({
        label: ylabel[i],
        data: inputdata[i],//[12, 19, 3, 5, 2, 3],
        backgroundColor: barColor[i], //'rgba(255, 99, 132, 0.2)',
        borderColor: barColor[i], //'rgba(255,99,132,1)',
        hoverBackgroundColor: hoverColor[i],
        borderWidth: 1
    })
  }
  var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: inputlabels,
        datasets: datasets
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: maxyvalue
                },
                stacked: true
            }],
            xAxes: [{
                stacked: true
            }]
        },
        animation: {
          onComplete: function(animation){
            document.querySelector(savegraphid).setAttribute('href', this.toBase64Image());
          }
        }
    }
  });
}
