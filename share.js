var object = [
 issue1 = document.getElementById("#issue1"),
 issue2 = document.getElementById("#issue2"),
 issue3 = document.getElementById("#issue3"),
 issue4 = document.getElementById("#issue4"),
 issue5 = document.getElementById("#issue5"),
 issue6 = document.getElementById("#issue6"),
 issue7 = document.getElementById("#issue7"),
 issue8 = document.getElementById("#issue8"),
]


// var object  = [issue1 , issue2, issue3, issue4, issue5, issue6, issue7, issue8];

function remove(){

for (i=0; i<object.length; i++){

    object[i].remove();
}

}

function generateAndAppend(){

var random = [];

    for (i=0; i<object.length; i++){

  let randomNumber = Math.floor(Math.random() * 7);

  random.push(randomNumber);

  document.getElementById("#container-1").appendChild(object[randomNumber]);
  
    }

    console.log(random)

}



remove();
generateAndAppend();
