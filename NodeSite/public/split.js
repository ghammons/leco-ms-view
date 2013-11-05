var ion;
var intensity;
var apart;
var mapped;
var mappedArray = [];

$('#massSpec').keyup(function() {

	var textValue = this.value;

//console.log('my value is ' + textValue);

	$("#output").text(textValue);
	
	
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
        
        // console.log(e[0] + ' = ' + e[1]);
        
        return +e[1];
    });
   
});

$('#graph').click(function() {

	$(document).ready(function() {

		Array.max = function( intensity ){
    		return Math.max.apply( Math, intensity );
		};
		
		var max = Array.max(intensity)
	
		console.log(max) 
	
		for(j = 0; j < intensity.length; j ++){
	    	mapped = [ion[j], (intensity[j]/max) *100];
	    
	        mappedArray.push(mapped);
		}
	
		$.plot($("#bar-example"), [
	    	{
		        data: mappedArray,
		        bars: {
	            	show: true
        		}
    		}
		]);
		
	});	
  
});