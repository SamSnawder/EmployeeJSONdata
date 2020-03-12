var blank =" "

var employeePromise=d3.json("employee.json");


employeePromise.then(function(employee)
    {console.log("worked", employee); displayTable(employee)});
    (function(err){console.log("failed", err)})

var displayTable = function(employee)
{
    var rows = d3.select("#employeetable")
    .selectAll("tr")
    .data(employee)
    .enter()
    .append("tr")
    rows.append("td")
        .append("img")
        .attr("src", function(employee){return employee.photo})
    rows.append("td")
        .text(function(employee){return employee.firstName + blank + employee.lastName})
     rows.append ("td")
        .text (function(employee)
        {return employee.title})
    rows.append ("td")
        .text (function(employee)
        {return employee.unit}      )
    rows.append ("td")
        .text(function(employee)
        {return employee.email+ blank + "&" + blank + employee.phone})
    rows.append ("td")
        .text (function(employee)
        {return employee.bio})
   
}