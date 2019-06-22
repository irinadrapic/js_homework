// from data.js
const ufoData = data;
console.log(ufoData);

//Get a reference to the table body
var tbody = d3.select("tbody");

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element
    var dateentered = d3.select("#datetime");
    console.log(d3.event.target);
    
    // Get the value property of the input element
    var inputValue = dateentered.property("value");
    console.log(inputValue);

    var filteredData = ufoData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
    
    //Loop through 'filteredData' for each datetime object
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
