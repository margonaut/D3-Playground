var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

var width = 900,
    height = 200;

var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(0," + height/2 + ")");

function update(data) {

  var text = svg.selectAll("text")
  .data(data);

  // UPDATE
  text.attr("class", "update");

  text.enter().append("text")
    .attr("class", "enter")
    .attr("x", function(d, i) { return i * 32; })
    .attr("dy", ".35em");

  text.text(function(d) { return d; });

  text.exit().remove();

};

update(alphabet);

setInterval(function() {
  update(d3.shuffle(alphabet)
    .slice(0, Math.floor(Math.random() * 26))
    .sort());
  },1500);
