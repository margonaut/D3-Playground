var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var height = 400,
    width = 900;

var svg = d3.select("body").append("svg")
    .attr("height", height)
    .attr("width", width)
  .append("g")
    .attr("transform", "translate(0," + height/2 + ")");

function update(data) {
  // DATA BIND
  var text = svg.selectAll("text")
    .data(data, function(d) {return d; });

  // UPDATE
  text.attr("class", "update")
    .transition()
      .duration(750)
      .attr("x", function(d, i) { return i * 32 });

  // ENTER
  text.enter().append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .attr("y", -60)
      .attr("x", function(d, i) { return i * 32 })
      .style("fill-opacity", 1e-6)
      .text(function(d) { return d; })
    .transition()
      .duration(750)
      .attr("y", 0)
      .style("fill-opacity", "1");

  // EXIT
  text.exit().remove();

}

function alphabetSelction() {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  selection = d3.shuffle(alphabet).slice(0, Math.floor(Math.random() * 26)).sort();
  return selection
}

update(alphabet);

setInterval(function(){update(alphabetSelction())}, 1500);
