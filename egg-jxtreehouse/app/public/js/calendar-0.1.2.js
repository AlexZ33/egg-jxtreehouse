
$(function () {
  var path = window.location.pathname.split('/');
  var category = path[1];
  var oid = category.charAt(0) + 'id';
  var chart = category + '-update-stats';
  var color = $('body').css('color');
  var width = $('#' + chart).width();
  var timestamp = $('#' + chart).data('timestamp') || Date.now();
  var api = '/api/report?' + oid + '=' + path[2] + '&timestamp=' + timestamp + '&field=updates';
  $.getJSON(api, function (data) {
    var counts = data.map(function (d) {
      return d.count || 0;
    });
    var max = Math.max.apply(null, counts);
    var min = Math.min.apply(null, counts);
    var string = new Date(timestamp).toISOString().slice(0, 7);
    var month = new Date(timestamp).getMonth();
    var start = new Date(string);
    var end = new Date(string);
    start.setMonth(month - 2);
    end.setMonth(month + 1);
    end.setDate(0);
    echarts.init(document.getElementById(chart), null, {
      renderer: 'canvas',
      width: 'auto'
    }).setOption({
      color: [ '#dc3545' ], 
      calendar: {
        left: 60,
        right: 15,
        top: 30,
        bottom: 15,
        orient: width > 400 ? 'horizontal' : 'vertical',
        range: [start.toISOString().slice(0, 10), end.toISOString().slice(0, 10)],
        cellSize: 'auto',
        splitLine: {
          lineStyle: {
            width: 1,
            color: color
          }
        },
        itemStyle: {
          normal: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderType: 'dotted'
          }
        },
        dayLabel: {
          firstDay: 1,
          nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          color: color,
          fontSize: 14,
          margin: 10
        },
        monthLabel: {
          nameMap: 'cn',
          color: color,
          fontSize: 14,
          margin: 10
        },
        yearLabel: {
          show: false
        }
      },
      series: {
        type: 'scatter',
        coordinateSystem: 'calendar',
        data: data.map(function (d) {
          return [d.date, d.count];
        }),
        symbolSize: function (value) {
          if (max === min) {
            return Math.round(width / 50) + 5;
          } else {
            var ratio = (value[1] - min) / (max - min) + (min / max);
            return Math.round(Math.sqrt(ratio / 2) * width / 25) + 5;
          }
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          var value = params.value;
          return value[0] + ': ' + value[1] + '次';
        },
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#333'
        }
      }
    });
  });
});
