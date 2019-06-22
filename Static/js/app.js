// from data.js
const ufoData = data;
console.log(ufoData);


var tbody = d3.select("tbody");


var submit = d3.select("#filter-btn");

submit.on("click", function() {
    
    
    d3.event.preventDefault();
    
    
    var dateentered = d3.select("#datetime");
    console.log(d3.event.target);
    
    
    var inputValue = dateentered.property("value");
    console.log(inputValue);

    var filteredData = ufoData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    
    
    filteredData.forEach(function(ufoReport){
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]){
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});    
