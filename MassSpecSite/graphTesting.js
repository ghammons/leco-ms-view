var d3 = require ('d3');

var dc = require ('dc');

var x = [1, 2, 3, 4];

var y = [5, 6, 7, 8];



dc.barChart("#volume-month-chart")
    .width(990) // (optional) define chart width, :default = 200
    .height(250) // (optional) define chart height, :default = 200
    .transitionDuration(500) // (optional) define chart transition duration, :default = 500
    // (optional) define margins
    .margins({top: 10, right: 50, bottom: 30, left: 40})
    .dimension(x) // set dimension
   
    .group(x) // set group
    // (optional) whether chart should rescale y axis to fit data, :default = false
    .elasticY(true)
    // (optional) when elasticY is on whether padding should be applied to y axis domain, :default=0
    .yAxisPadding(100)
    // (optional) whether chart should rescale x axis to fit data, :default = false
    .elasticX(true)
    // (optional) when elasticX is on whether padding should be applied to x axis domain, :default=0
    .xAxisPadding(500)
    // define x scale
    .x(d3.time.scale().domain([new Date(1985, 0, 1), new Date(2012, 11, 31)]))
    // (optional) set filter brush rounding
    .round(d3.time.month.round)
    // define x axis units
    .xUnits(d3.time.months)
    // (optional) whether bar should be center to its x value, :default=false
    .centerBar(true)
    // (optional) set gap between bars manually in px, :default=2
    //.barGap(1)
    // (optional) render horizontal grid lines, :default=false
    .renderHorizontalGridLines(true)
    // (optional) render vertical grid lines, :default=false
    .renderVerticalGridLines(true)
    // (optional) add stacked group and custom value retriever
    .stack(x, function(d){return d.value;})
    // (optional) you can add multiple stacked group with or without custom value retriever
    // if no custom retriever provided base chart's value retriever will be used
    .stack(x)
    // (optional) whether this chart should generate user interactive brush to allow range
    // selection, :default=true.
    .brushOn(true)
    // (optional) whether svg title element(tooltip) should be generated for each bar using
    // the given function, :default=no
    .title(function(d) { return "Value: " + d.value; })
    // (optional) whether chart should render titles, :default = false
    .renderTitle(true);
    
    dc.renderAll();