let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a url-friendly version of a string.
// example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function functionalMap(states) {
  return states.map(state => urlify(state))
}

//urls: functional version
function fullAddress(states) {
  return states.map(state => "https://example.com/" + state);
}
console.log (functionalMap(states));
console.log(fullAddress(functionalMap(states)));
