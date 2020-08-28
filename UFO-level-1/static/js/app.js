// from data.js
var tableData = data;

// YOUR CODE HERE!
var cols = ["city", "state", "country", "datetime", "shape", "durationMinutes", "comments"];
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city")
var inputState = d3.select("#state")
var inputCountry = d3.select("#country")
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

var createTable = (datum) => {
    datum.forEach(row => {
        var record = tbody.append("tr");
        cols.forEach(column => record.append("td").text(row[column]));
        
    });
};
createTable(tableData);

button.on("click", () => {
    d3.event.preventDefault();
    var trimDate = inputDate.property("value").trim();
    var filterOnDate = tableData.filter(tableData => tableData.datetime === trimDate)


    tbody.html("");

    let response = {
        filterOnDate
    }
    if (response.filterOnDate.length !== 0) {
        createTable(filterOnDate)
    }
    else {tbody.append("tr").append("td").text("Search not found! Please try another date.")}
})