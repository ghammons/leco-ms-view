


$('#massSpec').keyup(function() {

	var textValue = this.value;

//console.log('my value is ' + textValue);

	$("#output").text(textValue);
	
	
	var apart = textValue.split(" ");

	
	//splits the array 'apart' into two arrays based in the first number and last number in a number set (#:#)
	var ion = [],
    intensity = apart.map(function(e) {
        e = e.split(":");
        ion.push(+e[0]);
        return +e[1];
    });
    
    //turns array into csv format
    var mass = ion.join();
    var intensity2 = intensity.join()
    
	//converts array into JSON format   
    var mass2 = JSON.stringify(ion);
    var intensity3 = JSON.stringify(intensity);
    
    console.log(mass2);
    console.log(intensity3);
    
    
});