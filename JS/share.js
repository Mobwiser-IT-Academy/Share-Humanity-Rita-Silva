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

function getRandomNumber(min,max){

  let step1 = max - min + 1;
  let step2 = Math.random()*step1;
  let result = Math.floor(step2)+min;
  return result;
  console.log(result);
}
function createArrayOfNumbers(start, end){
  let myArray=[];
  
  for(let i= start; i<=end; i++){
    myArray.push(i);
  }

  return myArray;
  

}

let numbersArray = createArrayOfNumbers(0,7);



function append(){
  
  for(i=0; i<=7; i++){

  
  let randomIndex = getRandomNumber(0, numbersArray.length-1);
  let randomNumber = numbersArray[randomIndex];
  numbersArray.splice(randomIndex,1);

  document.getElementById("#container-1").appendChild(object[randomNumber]);

  }


  
}



remove();
append();



