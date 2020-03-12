var blank = " "
var employeePromise=d3.json("employee.json");


employeePromise.then(function(employee)
    {console.log("worked", employee)};);
    (function(err){console.log("failed", err)})

var displayDiv = function(employee)
    {
        var sections = d3.select(".employee")
        .selectAll("div")
        .data(employee)
        .enter()
        .append("div")
        
        sections.append(".eName")
        .text(function(employee){return employee.firstName + blank + lastName})
    }