var jsonObj;
//var APIKEY = "&APPID=88b6052f-b50c-4c37-ad60-e0a125f2d58f";//

function loadJSONDoc() {

var url = "https://api.covid19api.com/summary"//+APIKEY;//

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
