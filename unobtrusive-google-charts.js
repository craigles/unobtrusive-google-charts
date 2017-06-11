var unobtrusiveGoogleCharts = {
    options: {},
    drawChart: {
        "geoMap": function (element, data, options) {
            var chart = new google.visualization.GeoChart(element);
            chart.draw(data, options);
        },
        "bar": function (element, data, options) {
            var chart = new google.charts.Bar(element);
            chart.draw(data, google.charts.Bar.convertOptions(options));
        },
        "pie": function (element, data, options) {
            var chart = new google.visualization.PieChart(element);
            chart.draw(data, options);
        },
        "line": function (element, data, options) {
            var chart = new google.charts.Line(element);
            chart.draw(data, google.charts.Line.convertOptions(options));
        },
        "table": function (element, data, options) {
            var table = new google.visualization.Table(element);
            table.draw(data, options);
        }
    },

    drawChartElement: function (element, data) {
        var dataUrl = data || element.attr("data");
        var chartType = element.attr("chart-type");
        var options = element.data("options") || unobtrusiveGoogleCharts.options[chartType];
        var chartElement = element[0];

        $.getJSON(dataUrl, function (json) {
            var data = unobtrusiveGoogleCharts.getData(element, chartType, json);
            unobtrusiveGoogleCharts.drawChart[chartType](chartElement, data, options);
        });
    },

    getData: function(element, chartType, json) {
        if (chartType === "table") {
            var dataColumns = element.attr("columns");
            var data = new google.visualization.DataTable();

            $.each(JSON.parse(dataColumns), function (i, val) {
                data.addColumn(val[0], val[1]);
            });
            data.addRows(json);

            return data;
        }

        return google.visualization.arrayToDataTable(json);
    },

    bindChartSelectors: function () {
        $('div.chart').each(function () {
            unobtrusiveGoogleCharts.drawChartElement($(this));
        });

        $('select.chartSelect').change(function () {
            var data = $(this).val();
            var chartId = $(this).attr("chart-id");
            var chartElement = $("#" + chartId);

            unobtrusiveGoogleCharts.drawChartElement(chartElement, data);
        });
    }
}

$(document).ready(function () {
    google.charts.load('current', { packages: ['geochart', 'table', 'line', 'corechart', 'bar'] });
    google.charts.setOnLoadCallback(unobtrusiveGoogleCharts.bindChartSelectors);
});
