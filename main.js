/* en saanut millään toimimaan */

/*function printJSONTable(jsonObj) {

	var data = jsonObj;
	var out = "<table>";

		out += '<tr>';
		out += '<td>' + data.all + '<td>';
		out += '</tr>';


	out+="</table>";

	document.getElementById("tabledata").innerHTML = out;
}

  /* // JSON data is stored in data variable

var data = jsonObj;


var out ="<table>";

for (var i=0; i< data.length; i++) {

//for each loop round we will create a new table

out += '<tr>'
// for each cell, we will output data fields from JSON
out += '<td>' + data[i].name.first + '</td>';
out += '<td>' + data[i].name.last + '</td>';
out += '<td>' + data[i].eyeColor + '</td>';
out += '<td>' + data[i].balance + '</td>';

//out += '<td>' + data[i].picture + '</td>';

out += '<td><img src="' + data[i].picture+'"></td>';
out += '</tr>;

//after all athe data has been set, we will output
out+="</table>";

//place the newly created table in tabledata-div
document. getElementById("tabledata").innerHTML = out;
*/
var jsonObj;

/*function loadDoc() {

	var url = "https://api.covid19api.com/dayone/country/finland";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

xmlhttp.onreadystatechange = function(){


	if (xmlhttp.readyState == 4 && xmlhttp.status == 200){

		document.getElementById("content").innerHTML = xmlhttp.responseText;
		jsonObj = JSON.parse(xmlhttp.responseText);

		console.log(jsonObj);
		printJSONTable(jsonObj);
	
}
*/