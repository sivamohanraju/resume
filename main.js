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
  Education(dat.education);
  skills(dat.skills);
  lang();
  conclusion(dat.conclusion);

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
function conclusion(con){
  var h2=document.createElement("h2");
  h2.textContent = "conclusion :";
  right.appendChild(h2);
  var p = document.createElement("p");
  p.textContent = con.data;
  right.appendChild(p);
}

function skills(skills){
  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.textContent = "Web Development";
  tr.appendChild(td);
  var td = document.createElement("td");
  td.textContent = skills.webdevelopment;
  tr.appendChild(td);
  table.appendChild(tr);
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.textContent = "Technologies";
  tr.appendChild(td);
  var td = document.createElement("td");
  td.textContent = skills.technologies;
  tr.appendChild(td);
  table.appendChild(tr);
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.textContent = "Operating System";
  tr.appendChild(td);
  var td = document.createElement("td");
  td.textContent = skills.os;
  tr.appendChild(td);
  table.appendChild(tr);
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  td.textContent = "Databases";
  tr.appendChild(td);
  var td = document.createElement("td");
  td.textContent = skills.db;
  tr.appendChild(td);
  table.appendChild(tr);
  var h2 = document.createElement("h2");
  h2.textContent = "Technical Skills";
  right.appendChild(h2);
  right.appendChild(table);
}
function Education(edu){
  var h2 = document.createElement("h2");
  h2.textContent = "Education";
  right.appendChild(h2);
  console.log("function");
  var ul = document.createElement("ul");
  right.appendChild(ul);
  console.log(edu.length);
  for(i=0;i<edu.length;i++){
    var li = document.createElement("li");
    li.textContent = edu[i].degree;
    ul.appendChild(li);
  }
  console.log("function");
}
function lang(){
  var h2 = document.createElement("h2");
  h2.textContent = "Languages";
  right.appendChild(h2);
  var ul = document.createElement("ul");
  right.appendChild(ul);
  var  li1= document.createElement("li");
  li1.textContent="Telugu";
  ul.appendChild(li1);
  var  li2= document.createElement("li");
  li2.textContent="English";
  ul.appendChild(li2);
}
