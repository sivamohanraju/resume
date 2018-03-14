function getfile(file){
  return new Promise(function(hi,bye){
    return fetch(file).then(function(response){
      if(response.ok){
        hi(response.json());
      } else {
        bye(new Error('error'));
      }
    })
  })
}

var gotfile=getfile("api-data/resumedata.json");
gotfile.then(function(dat){
  console.log(dat);
  career(dat.career);
})

var right=document.querySelector(".content");

function career(car){
  var h2=document.createElement("h2");
  h2.textContent="Career Objective";
  right.appendChild(h2);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.data;
  right.appendChild(p);
}
// function loadJSON(url, callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET", url, true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status == "200") {
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send();
// }

// loadJSON("api-data/resumedata.json", function(text) {
//   let data = JSON.parse(text);
//   console.log(data);
// });
