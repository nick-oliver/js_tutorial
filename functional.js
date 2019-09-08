let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Kansas -> Kansas
//North Dakota -> north-dakota
// urls: Imperitive version
function imperitiveUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(element.toLowerCase().split(/\s+/).join("-"));
  });
  return urls;
}
console.log(imperitiveUrls(states));
