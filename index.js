//list down all the winning combinations

let winningCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

//accessing all boxes

let boxElement = document.querySelectorAll(".box")

// Providing event listener to all the boxes

for(elem of boxElement){
    elem.addEventListener("click", handleClick);
}
let click = 0;
let xAttempts = []
let oAttempts = []

function handleClick(event){
    let ptag = document.createElement("p");
    
    let id = event.target.id
    if(click%2==0){
        ptag.textContent = 'X';
        click++;
        xAttempts.push(parseInt(id));
        result(xAttempts, "X")
    }else{
        ptag.textContent = 'O';
        click++;
        oAttempts.push(parseInt(id));
        result(oAttempts, "O")

    }

    ptag.style.color = "#FAB201"
    boxElement[id-1].appendChild(ptag)
}

function result(playerArray, player){
    for(let i=0; i<winningCombinations.length;i++){
        let check=true;
        for(let j=0; j<winningCombinations[i].length; j++){
            if(!playerArray.includes(winningCombinations[i][j])){
                check = false;
                break;
            }
        }
        if (check) {
            // console.log(player + " wins!")
            document.getElementById('result').style.visibility = "visible";

            document.getElementById("message").textContent = `'${player}' Won the game!`

            document.getElementById("button").onclick = ()=>{
                location.href = "./index.html"
            }
            break;
        }
    }
}
