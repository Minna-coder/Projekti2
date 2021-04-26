function printJSONTable(jsonObj) {

	var data = jsonObj;
	var out = "<table>";

		out += '<tr>';
		out += '<td>' + data.all + '<td>';
		out += '</tr>';


	out+="</table>";

	document.getElementById("tabledata").innerHTML = out;
}
