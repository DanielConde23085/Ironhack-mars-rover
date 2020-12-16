// Iteration 1

let rover = {
  direction: "N",
  x: 0,
  y: 0,
}

//Iteration 2
function turnLeft(rover) {

  if (rover.direction === "N") {
    rover.direction = "W";
} else if(rover.direction === "W"){
  rover.direction = "S";
} else if(rover.direction === "S"){
   rover.direction = "E";
} else if(rover.direction === "E"){
    rover.direction = "N";
}


}
function turnRight(rover){
  if (rover.direction === "N") {
  rover.direction = "E";
} else if(rover.direction === "W"){
  rover.direction = "N";
} else if(rover.direction == "S"){
   rover.direction = "W";
} else if(rover.direction == "W"){
    rover.direction = "S";
}


}

// Iteration 3
 
function moveForward(rover) {

  if (rover.direction === "N") {
    rover.y--;
  } else if(rover.direction === "S"){
    rover.y++;
  } else if(rover.direction === "E"){
    rover.x++;
  } else if(rover.direction === "W"){
    rover.x--;
  }
}


function commands(steps){

  for(let i = 0; i < steps.length; i++){
    if(steps.charAt(i) === "l"){
      turnLeft(rover);
    } else if (steps.charAt (i) === "r") {
      turnRight (rover) ;
    } else if (steps.charAt (i) === "f") {
      moveForward(rover);
    }



//
rover.travelLog.push(steps.charAt (i));


}

console.log("Travel Log: " + rover.travelLog);



}