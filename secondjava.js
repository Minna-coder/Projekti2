function loadJSONTable(jsonObj)
var url = "https://api.covid19api.com/summary";

let url ="https://api.covid19api.com/summary";

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","https://api.covid19api.com/summary",true);
xmlhttp.send();

// Ajetaan kun vastaus saadaan
xmlhttp.onreadystatechange=function() {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
    // Muutetaan raakadata JSON muotoon
    let data = JSON.parse( xmlhttp.responseText );
    // Kaivetaan Suomen data esiin
         console.log ( data.Countries[58] );
    // Kaivetaan kenttäkohtaista dataa
        console.log ( data.Countries[58].TotalConfirmed );
        console.log ( data.Countries[58].TotalRecovered );
    
        document.write( data.Countries[58].TotalConfirmed );
    	printJSONTable(jsonObj);
    }
}
