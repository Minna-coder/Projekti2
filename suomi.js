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
    
        document.write( data.Countries[58].Country );
        document.write( data.Countries[58].TotalConfirmed );
        document.write ( data.Countries[58].TotalRecovered );
    	printJSONTable(jsonObj);
    }
}




/*{
      "ID": "9db5e016-8f44-4eab-bdab-163291269d72",
      "Country": "Finland",
      "CountryCode": "FI",
      "Slug": "finland",
      "NewConfirmed": 0,
      "TotalConfirmed": 85937,
      "NewDeaths": 0,
      "TotalDeaths": 906,
      "NewRecovered": 0,
      "TotalRecovered": 46000,
      "Date": "2021-04-27T18:59:30.908Z",
      "Premium": {}
    },*/