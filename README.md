# Unobtrusive Google Charts
A JavaScript library for displaying Google Charts unobtrusively.
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
Add JQuery and Google Charts dependencies:
```html
<head>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  
  <!-- If using GeoMap -->
  <script async defer src="https://maps.googleapis.com/maps/api/js?key={YourAPIKey}" type="text/javascript"></script>
  <script src="https://www.google.com/jsapi" type="text/javascript"></script>
  
  <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/craigles/unobtrusive-google-charts@0.2/unobtrusive-google-charts.min.js"></script>
</head>
```

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
    data="data/genrePercentages.json">
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

### Selectable Graph
```html
<select class="chartSelect" chart-id="mostpopularinfluences">
    <option value="data/mostPopularInfluences.json">All</option>
    <option value="data/mostPopularInfluencesDance.json">Dance</option>
    <option value="data/mostPopularInfluencesElectronic.json">Electronic</option>
    <option value="data/mostPopularInfluencesHipHop.json">Hip Hop</option>
    <option value="data/mostPopularInfluencesIndie.json">Indie</option>
    <option value="data/mostPopularInfluencesMetal.json">Metal</option>
    <option value="data/mostPopularInfluencesPop.json">Pop</option>
    <option value="data/mostPopularInfluencesPunk.json">Punk</option>
    <option value="data/mostPopularInfluencesRock.json">Rock</option>
    <option value="data/mostPopularInfluencesRoots.json">Roots</option>
</select>
<div 
    id="mostpopularinfluences" 
    class="chart" 
    chart-type="bar"
    data="data/mostPopularInfluences.json">
</div>
```

## Default Options
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
