// let box=document.querySelectorAll(".box")
// let resetbtn=document.querySelector("reset")


// let turn0=true;

// const winpattern=[
//     [0,1,2]
//     [0,3,6]
//      [0,4,8]
//      [1,4,7]
//      [2,5,8]
//      [2,4,6]
//      [3,4,5]
//      [6,7,8]
      
// ];
// box.array.forEach(box => {
//     box.addEventlistner("click", function(){
//         console.log("boxes was clicked");
//         box.innertext="abc";
        
//     })
// });












// let box = document.querySelectorAll(".box")
// let resetbtn = document.querySelector(".reset")
// let turn0 = true;

// const winpattern = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8]
// ];

// box.forEach(box => {
//   box.addEventListener("click", function() {
//     console.log("box was clicked");
//     box.innerText = "abc";
//     if(turn0){
//         box.innerText="0";
//         turn0=false;
//      } else
        
//            {
//             box.innerText='x'
//             turn0=true;

//          } 
         
//          box.disabled=true;
//          checkwinner()
//     }



//   )
// });

// const checkwinner=() =>{
//     for(pattern of winpattern);{
//         console.log( box[pattern[0]] .innerText
//             , box[pattern[1]] .innerText
//             ,box[pattern[2]] .innerText
//         )
//         let pas0Val=box[pattern[0]].innerText
//         let pas1Val=box[pattern[1]].innerText
//         let pas2Val=box[pattern[2]].innerText
//         let pas3Val=box[pattern[3]].innerText



//         if( pas1Val != "" && pas2Val != "" && "" &&pas3Val)  {
//           if( pas1Val === pas2Val && pas2Val=== pas3Val){
//             console.log('winner');
            
//           }
//         }
//     }
//     }


let box = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset")
let newGameBtn = document.querySelector(".new-game")
let msg = document.getElementById("msg")
let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

box.forEach((box, index) => {
  box.addEventListener("click", function() {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = 'X';
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pas0Val = box[pattern[0]].innerText;
    let pas1Val = box[pattern[1]].innerText;
    let pas2Val = box[pattern[2]].innerText;

    if (pas0Val != "" && pas1Val != "" && pas2Val != "") {
      if (pas0Val === pas1Val && pas1Val === pas2Val) {
        console.log('winner');
        msg.innerText = `Player ${pas0Val} wins!`;
        newGameBtn.style.display = 'block';
        return;
      }
    }
  }

  let draw = true;
  box.forEach((box) => {
    if (box.innerText === "") {
      draw = false;
    }
  });

  if (draw) {
    console.log('draw');
    msg.innerText = `It's a draw!`;
    newGameBtn.style.display = 'block';
  }
}

newGameBtn.addEventListener("click", function() {
  msg.innerText = "";
  newGameBtn.style.display = 'none';
  box.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  turn0 = true;
});
