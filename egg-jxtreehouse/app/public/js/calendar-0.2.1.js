
$(function () {
  var path = window.location.pathname.split('/');
  var category = path[1];
  var oid = category.charAt(0) + 'id';
  var chart = category + '-update-stats';
  var color = $('main').css('color');
  var width = $('#' + chart).width();
  var timestamp = $('#' + chart).data('timestamp') || Date.now();
  var api = '/api/report?' + oid + '=' + path[2] + '&timestamp=' + timestamp + '&field=updates';

  var Shape = G2.Shape;
  var Util = G2.Util;
  Shape.registerShape('polygon', 'boundary-polygon', {
    draw: function (cfg, container) {
      if (!Util.isEmpty(cfg.points)) {
        var attrs = {
          stroke: '#ccc',
          lineWidth: 1,
          fill: cfg.color,
          fillOpacity: cfg.opacity
        };
        var points = cfg.points;
        var path = [
          ['M', points[0].x, points[0].y],
          ['L', points[1].x, points[1].y],
          ['L', points[2].x, points[2].y],
          ['L', points[3].x, points[3].y],
          ['Z' ]
        ];
        attrs.path = this.parsePath(path);

        var polygon = container.addShape('path', { attrs: attrs });
        var d = cfg.origin._origin;
        if (d.lastWeek) {
          var linePath = [
            ['M', points[2].x, points[2].y],
            ['L', points[3].x, points[3].y],
          ];
          container.addShape('path', {
            zIndex: 1,
            attrs: {
              path: this.parsePath(linePath),
              lineWidth: d.hasNext ? 1 : 0,
              stroke: color
            }
          });
          if (d.lastDay) {
            container.addShape('path', {
              zIndex: 1,
              attrs: {
                path: this.parsePath([
                  ['M', points[1].x, points[1].y],
                  ['L', points[2].x, points[2].y],
                ]),
                lineWidth: d.hasNext ? 1 : 0,
                stroke: color
              }
            });
          }
        }
        container.sort();
        return polygon;
      }
    }
  });

  var string = new Date(timestamp).toISOString().slice(0, 7);
  var month = new Date(timestamp).getMonth();
  var start = new Date(string);
  var end = new Date(string);
  start.setMonth(month - 2);
  end.setMonth(month + 1);
  end.setDate(0);
  $.getJSON(api, function (data) {
    var past = Date.parse('2017-01-01');
    var period = 1000 * 3600 * 24;
    var current = Date.parse(start);
    var records = [];
    while (current <= end) {
      var date = new Date(current);
      var month = date.getMonth();
      var count = 0;
      data.some(function (d) {
        if (Date.parse(d.date) === current) {
          count = d.count;
          return true;
        }
        return false;
      });
      records.push({
        date: date.toISOString().slice(0, 10),
        day: date.getDay(),
        week: String(Math.floor((current - past) / (period * 7))),
        lastDay: new Date(current + period).getMonth() !== month,
        lastWeek: new Date(current + period * 7).getMonth() !== month,
        hasNext: new Date(current + period * 7) < end,
        count: count
      });
      current += period;
    }

    var months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    var calendar = new G2.Chart({
      container: chart,
      width: width,
      height: width * 0.5,
      padding: [30, 5, 5, 45]
    });
    calendar.source(records, {
      day: {
        type: 'cat',
        values: width > 600 ? ['周日', '周一', '周二', '周三', '周四', '周五', '周六'] :
          ['日', '一', '二', '三', '四', '五', '六' ]
      },
      week: {
        type: 'cat'
      },
      count: {
        sync: true
      }
    });
    calendar.axis('week', {
      position: 'bottom',
      tickLine: null,
      line: null,
      label: {
        offset: 25,
        autoRotate: false,
        textStyle: {
          fontSize: 14,
          fill: color,
          textAlign: 'end',
          textBaseline: 'top'
        },
        formatter: function (value) {
          var current = new Date(past + period * Number(value) * 7);
          var date = current.getDate();
          if (date >= 13 && date < 20) {
            var month = current.getMonth();
            return months[month] + (width > 600 ? '月' : '');
          }
          return '';
        }
      }
    });
    calendar.axis('day', {
      grid: null,
      label: {
        offset: 10,
        textStyle: {
          fontSize: 14,
          fill: color,
          textBaseline: 'middle'
        }
      }
    });
    calendar.tooltip({
      showTitle: false,
      itemTpl: '<li>{date}: {count}次</li>'
    });
    calendar.coord().reflect('y');
    calendar.polygon().position('week*day*date')
            .tooltip('date*count', function (date, count) {
              return { date: date, count: count };
            }).shape('boundary-polygon')
            .color('count', ['#ffffff', '#ff9ea8', '#dc3545']).opacity(1);
    calendar.render();
  });
});
