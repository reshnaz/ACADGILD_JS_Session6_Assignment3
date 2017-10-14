
// This function is invoked by the html button click. 
 
function calData(m1,m2,m3){
	m1=Number(m1); //Convert input data(marks) to number format.
	m2=Number(m2);
	m3=Number(m3);
	var avg=(m1+m2+m3)/3; //Calculates the average of marks entered

	// Below conditions calculate the grade based on whether mark > or <= 35.
	if(m1<35){
		document.getElementById('g1').innerHTML="Fail";
	}
	else{
		document.getElementById('g1').innerHTML="Pass";
	}
	if(m2<35){
		document.getElementById('g2').innerHTML="Fail";
	}
	else{
		document.getElementById('g2').innerHTML="Pass";
	}
	if(m3<35){
		document.getElementById('g3').innerHTML="Fail";
	}
	else{
		document.getElementById('g3').innerHTML="Pass";
	}
	document.getElementById('result').innerHTML=avg;
}