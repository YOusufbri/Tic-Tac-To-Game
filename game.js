let boxes = document.querySelector(".box");
let resateButton = document.querySelector("#resate-button");
let masgContaner = document.querySelector(".masg-contaner");
let newbtn = document.querySelector("#new-btn");
let masg = document.querySelector("#masg");

let turnO = true; //playerX and playerO

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 7],
];

const resateGame = () => {
    turnO = true;
    enabelBoxes();
    masgContaner.classList.add ("hide")
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        chickWinner();
    });
});

const disabelBoxes = () => {
    for (let box of boxes) { 
        box.disabled = true;
    }
}
const enabelBoxes = () => {
    for (let box of boxes) { 
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (Winner) => {
    masg.innerHTML = `Congratulation winner is ${Winner}`;
    masgContaner.classList.remove("hide");
    disabelBoxes();
}

const chickWinner = () => {
    for (let patterns of winPatterns) {
        let pos1Val = boxes[patterns[0]].innerHTML;
        let pos2Val = boxes[patterns[1]].innerHTML;
        let pos3Val = boxes[patterns[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner =", pos1Val)
                showWinner (pos1Val);
            }
        }
    }
};