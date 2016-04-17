// get the alphabet as an array
// set the dimension variables
// create the svg container element,
// apply the dimensions to it and
// append a group at half height

// the write the update function

// call the initial update function
// then call it again on an interval
// and give it a random selection of letters

var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

var width = 900,
    height = 400;

var svg = d3.select("body").append("svg")
    .attr("height", height)
    .attr("width", width)
  .append("g")
    .attr("transform", "translate(0," + height/2 + ")");

function update(data) {
  var text = svg.selectAll("text")
    .data(data, function(d) {return d;});

// UPDATE
  text.attr("class", "update");

// ENTER
  text.enter().append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .text(function(d) { return d; });

// ENTER AND UPDATE
  text.attr("x", function(d, i) { return i * 32; });

  text.exit().remove();
}

// random selection method:
// Get the array, shuffle the array
// slice the array from 0 to random number
// sort if necessary
function alphabetSelection() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  var selection = d3.shuffle(alphabet).slice(0, Math.floor(Math.random() * 26)).sort();
  return selection
}

update(alphabet);

// setInterval only works if you call your functions within an
// anonymous function
setInterval(function() { update(alphabetSelection()) }, 1500);
