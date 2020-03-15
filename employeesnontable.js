var blank = " "
var employeePromise=d3.json("employee.json");


employeePromise.then(function(employee)
    {console.log("worked", employee)};);
    (function(err){console.log("failed", err)})

var displayDiv = function(employee)
    {
        var sections = d3.select("div")
        .selectAll(".employee")
        .data(employee)
        .enter()
        .append(".employee")
        rows.append(".ename")
        .text(function(employee){return employee.firstName + blank + employee.lastName})
    }
var displayDiv = function(employee)
    {
        var paragraphs = d3.select("body")
        .selectAll("p")
        .data(employee)
        .enter()
        .append("p")
        .text (function(employee){return employee.bio})
    }