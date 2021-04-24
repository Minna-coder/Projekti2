var jsonObj;
var APIKEY = "&APPID=ff64c247a136f706923...";

function loadJSONDoc() {

var url = "https://api.openweathermap.org/data/2.5/weather?q=Helsinki,%20FI&units=Metric"+APIKEY;

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, true);
xmlhttp.send();

xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

		document.getElementById("content").innerHTML = xmlhttp.responseText;

jsonObj = JSON.parse(xmlhttp.responseText);

console.log(jsonObj);

printJSONTable(jsonObj);
}
