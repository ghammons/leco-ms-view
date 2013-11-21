var ion; //x value of graph
var intensity;//y value on graph
var apart;//user input split ion and intensity pairs
var mappedArray = [];//datapoints put into an array

$('#massSpec').keyup(function() {//splits user input and sorts it from lowest value to highest value

	var textValue = this.value;
	
	apart = textValue.split(" ");
	
	//bubble sort
	for(i = 0; i < apart.length - 1; i++)
	{
		for(k = 0; k < apart.length - i - 1; k++)
		{
			
			var var1 = (apart[k].split(":"))[0];
			var var2 = (apart[k+1].split(":"))[0];
			
			if(parseInt(var1) > parseInt(var2))
			{
				var temp;
				temp = apart[k];
				apart[k] = apart[k+1];
				apart[k+1] = temp;
			}
				
		}
	}
	
	//splits the array 'apart' into two arrays based in the first number and last number in a number set (#:#)
	ion = [],
    intensity = apart.map(function(e) {
        e = e.split(":");
      
        ion.push(+e[0]);
        
        return +e[1];
    });
   
});

$('#graph').click(function() {//on button click, shows graph

	$(document).ready(function() {
	
		Array.max = function( intensity ){//locates the highest intensity value within the user's input
    		return Math.max.apply( Math, intensity );
		};
		
		var max = Array.max(intensity)
		var mapped;//data points

		for(j = 0; j < intensity.length; j++){//divides all intensity values by the maximum value to create a percentage scale
	    	mapped = [ion[j], (intensity[j]/max) *100];
	    
	        mappedArray.push(mapped);
		}
	//setting bounds for graph
		var options = {
			xaxis: { min: 0, max: 500, tickSize: 25 },
			yaxis: { min: 0, max: 110, tickSize: 10 },
			grid: { hoverable: true }
		}
	
		$.plot($("#bar-example"), [//giving input to graph and ploting input
	    	{
		        data: mappedArray,
		        bars: {
	            	show: true,
        		}
        	}
        ],	
        options
		);

		function showTooltip(x, y, contents) {//creates the box that appears when the mouse hovers over a bar of the graph
      		$('<div id="tooltip">' + contents + '</div>').css({
          		position: 'absolute',
          		display: 'none',
		          top: y + 5,
		          left: x + 5,
		          border: '1px solid #fdd',
		          padding: '2px',
		          'background-color': '#fee',
		          opacity: 0.80
      		}).appendTo("body").fadeIn(200);
  		}
  
  		$("#bar-example").bind("plothover", function (event, pos, item) {//gives data to the hover box, which is then displayed
      		$("#tooltip").remove();
      		if (item) {
          		var x = item.datapoint[0].toFixed(0);
          		showTooltip(item.pageX, item.pageY, x);
      		}
  		});
  		
  		
  		
  			//get 20 highest intensities and the matching ions
			//for(var j = 0; j <
  		
  		
  		
  		
		  var grid;
		  var columns = [
		  	{ id: "title", name: "Ions", field: "ions" },
		  	{ id: "title2", name: "Intensity", field: "intensity" }
		  ];
		  
		  var options = {
		    enableCellNavigation: true,
		    enableColumnReorder: false
		  };
		
	   	$(function () {
	   	var data = [];
	   	for (var i = 0; i < 20; i++) {
	     	data[i] = {
		       	title: i,
		       	ions: ion[i],
				intensity: intensity[i]
				};
	      	}
		
		  grid = new Slick.Grid("#myGrid", data, columns, options);
		})
	});
});