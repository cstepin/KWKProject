// 1. event.preventDefault();
// var task = $('.class-name').val();
// 2. window.prompt("");

var button = $('.submit-btn');
var list = $('.card-container');

console.log(button);

button.on("click", typeFact);

function typeFact(){
  event.preventDefault();
  var task = $('.name').val();
  list.append(`

  <div>
    <p id = "check-box" style = "display:inline">▢</p>
    <p style = "display:inline">${task} 
    </p>
    <p> </p>
    <button class = "delete"> Delete </button>
    <p> </p>
  </div>
  `);
  $('.name').val("");
}

list.on("click", deleteGoal);

function deleteGoal(){
  if (event.target.className === "delete"){
    event.target.parentNode.remove();
  }
}

list.on("click", checkGoal);

function checkGoal(){
  //console.log(event.target.id);
  if(event.target.innerHTML == "▢" && event.target.id == "check-box"){
    event.target.innerHTML = "☑︎";
  }
  else if (event.target.innerHTML == "☑︎" && event.target.id == "check-box"){
    event.target.innerHTML = "▢";
  }

  // if(event.target.id == "check-box"){
  //   event.target.innerHTML = "☑︎";
  // }
}