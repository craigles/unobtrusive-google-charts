# Unobtrusive Google Charts
A tiny JavaScript library for displaying Google Charts unobtrusively.
## Dependencies
- [JQuery](http://jquery.com)
- [Google Charts](https://developers.google.com/chart/)

## Charts Supported
- [Bar](https://developers.google.com/chart/interactive/docs/gallery/barchart)
- [Pie](https://developers.google.com/chart/interactive/docs/gallery/piechart)
- [Line](https://developers.google.com/chart/interactive/docs/gallery/linechart)
- [Table](https://developers.google.com/chart/interactive/docs/gallery/table)
- [GeoMap](https://developers.google.com/chart/interactive/docs/gallery/geomap) (Must have Google maps [API key](https://developers.google.com/maps/documentation/javascript/get-api-key))

## Usage

### Bar Graph
```html
<div 
    class='chart' 
    chart-type='bar'
    data='data/genresPlayedOnJJJ.json"'
    options='{"orientation": "vertical"}'>
</div>
```

### Pie Graph
```html
<div 
    class="chart" 
    chart-type="pie"
    data="data/genrePercentages.json"
    >
</div>
```

### Line Graph
```html
<div 
    class="chart" 
    chart-type="line"
    data-options='{"curveType": "function"}'
    data="data/locationsPlayedOnJJJPerYear.json">
</div>
```

### Table
```html
<div 
    class="chart" 
    chart-type="table"
    data="data/artistsLocationTable.json" 
    columns='[["string", "Location"],["number", "Artists"],["number", "Artists per 100 000 people"]]'
    data-options='{
        "showRowNumber": false,
        "width": "100%",
        "height": "100%",
        "sortColumn": 2,
        "sortAscending": false
    }'>
</div>
```

### GeoMap
```html
<div 
    class="chart"
    chart-type="geoMap"
    data="data/artistsByLocation.json">
</div>
```

### Default Options
Options set here will be used if no options are set in the chart element.

```javascript
unobtrusiveGoogleCharts.options.geoMap = {
    region: 'AU',
    displayMode: 'markers',
    colors: ['blue', 'red']
};

unobtrusiveGoogleCharts.options.bar = {
    orientation: "vertical",
    legend: { position: "none" }
};

unobtrusiveGoogleCharts.options.line = {
    curveType: "function"
}
```
