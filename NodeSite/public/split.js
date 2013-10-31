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
        
        console.log(e[0] + ' = ' + e[1]);
        
        return +e[1];
    });
    
    

});

$('#graph').click(function() {

$(document).ready(function() {

	for(j = 0; j < intensity.length; j ++){
    	mapped = { y: ion[j], a: intensity[j] };
    	
    
      	mappedArray.push(mapped);
      	//console.log(mappedArray);
	}

	Morris.Bar({
	  element: 'bar-example',
	  data: mappedArray,
	  xkey: 'y',
	  ykeys: ['a'],
	  labels: ['Intensity'],
	  axes: [
	  	{
	  		type: 'Numeric',
	  		position : 'left',
	  		fields: ['ions'],
	  		grid: true,
	  		minimum: 0,
	  		maximum: 800
	  	},
	  	{
	  		type: 'Category',
	  		position: 'bottom',
	  		fields: ['intensity']
	  	}
	  ],
	});
});	

  
});