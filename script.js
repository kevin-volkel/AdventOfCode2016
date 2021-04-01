let input = `R3, R1, R4, L4, R3, R1, R1, L3, L5, L5, L3, R1, R4, L2, L1, R3, L3, R2, R1, R1, L5, L2, L1, R2, L4, R1, L2, L4, R2, R2, L2, L4, L3, R1, R4, R3, L1, R1, L5, R4, L2, R185, L2, R4, R49, L3, L4, R5, R1, R1, L1, L1, R2, L1, L4, R4, R5, R4, L3, L5, R1, R71, L1, R1, R186, L5, L2, R5, R4, R1, L5, L2, R3, R2, R5, R5, R4, R1, R4, R2, L1, R4, L1, L4, L5, L4, R4, R5, R1, L2, L4, L1, L5, L3, L5, R2, L5, R4, L4, R3, R3, R1, R4, L1, L2, R2, L1, R4, R2, R2, R5, R2, R5, L1, R1, L4, R5, R4, R2, R4, L5, R3, R2, R5, R3, L3, L5, L4, L3, L2, L2, R3, R2, L1, L1, L5, R1, L3, R3, R4, R5, L3, L5, R1, L3, L5, L5, L2, R1, L3, L1, L3, R4, L1, R3, L2, L2, R3, R3, R4, R4, R1, L4, R1, L5`;
input = input.split(", ")

function dayOne(part = 1){
    let yCoord = 0;
    let xCoord = 0;
    let coordArr = [];

    //   0     1     2     3
    //north, east, south, west
    let direct = 0;
    for(item in input){
        let turnDir = input[item].charAt(0);
        let dist = Number(input[item].substring(1));
        if(turnDir == "L"){
            direct--;
        }else{
            direct++;
        }
        if(direct == -1){
            direct = 3;
        }else if(direct == 4){
            direct = 0;
        }

        for(let i = 0; i < dist; i++){
            switch(direct){
                case 0: 
                    yCoord++;
                    break;
                case 1:
                    xCoord++;
                    break;
                case 2:
                    yCoord--;
                    break;
                case 3:
                    xCoord--;
                    break;
            }
            if(part == 2){
                let coords = `${xCoord}, ${yCoord}`
                console.log(coords)
                if(coordArr.includes(coords)){
                    return Math.abs(xCoord) + Math.abs(yCoord)
                }else{
                    coordArr.push(coords);
                }
            }
        }
    }
    return Math.abs(xCoord) + Math.abs(yCoord)
}
// console.log(dayOne(2))

let input2 = `LRULLRLDUUUDUDDDRLUDRDLDDLUUDLDDLRDRLDRLLURRULURLDRLDUDURLURRULLDDDUDDRRRDLRRDDLDURDULLRDLLLDRDLLDULDUDLLDLDRUDLLDLDDRRRDRLUDRDDLUDRRDUDUDLLDDUUDLRDUDRRUDUDRULRULUDRUUDLDLULLRLDLDDRULLRLLLULUULDURURLUUULDURLDDDURRUUDURDDDULDLURLRDRURDRUDRLLDLDRUURLLLRDRURUDLRLUDULLDDURLRURDLRDUUURRLULRRLDDULUUURLRRRLLLLLURDDRUULUDRRRUDDLLULRRUULDRDDULRLDDDRRUULUDRLRUDURUUULDLDULUUDURLLLRRDDRDLURDDDLDDDLRDRLDDURLRLLRUDRRLLDDDDDURDURRDDULDULLRULDRUURDRRDUDDUDDDDRRDULDUURDRUDRLDULRULURLLRRDRDRDLUUDRRLRLDULDDLUUUUUURRLRRRULLDDDRLRDRRRRRRRDUUDLLUDURUDDLURRUDL
UDUUURRLRLLDDRRDRRRLDDDLURURLLUDDRLUUDRRRDURRLLRURDLLRRDUUDDDDRDRURRLLLLURDLRRRULLLDLLLUDDLDRRRDLDUUDDRDUDDUURDDLULULDURDURDRUULURURRURDUURUDRRUDRLLLLRRDLLDRDDRLLURDDDUDUDUDRUURDDRUURDLRUUDDRDUURUDDLLUURDLUDRUUDRRDLLUUURDULUULDUUDLLULUUDLUDRUUDUUURLDDDRLRURDDULLRDRULULUDLUUDDDUUDLDUUDRULLDUURDDRUDURULDRDDLRUULRRRDLDLRDULRDDRLLRRLURDLDRUDLRLUDLRLDLDURRUULRLUURDULDRRULLRULRDLLDLDUDRUDDUDLDDURDDDRDLUDRULRUULLRURLDDDRDLRRDRULURULDULRDLDULDURDRDRDRDURDRLUURLRDDLDDRLDDRURLLLURURDULDUDDLLUURDUUUDRUDDRDLDRLRLDURRULDULUUDDLRULDLRRRRDLLDRUUDRLLDLUDUULRDRDLRUUDLRRDDLUULDUULRUDRURLDDDURLRRULURR
LDURLLLRLLLUURLLULDLRLLDLURULRULRDUDLDDUDRLRRDLULLDDULUUULDRLDURURLURLDLRUDULLLULDUURLLRDLUULRULLLULRDRULUDLUUULDDURLUDDUDDRDLDRDRUDLUURDDLULDUULURLUULRDRDLURUDRUDLDRLUUUUULUDUDRRURUDRULDLDRDRLRURUUDRDLULLUDLLRUUDUUDUDLLRRRLDUDDDRDUDLDLLULRDURULLLUDLLRUDDUUDRLDUULLDLUUDUULURURLLULDUULLDLUDUURLURDLUULRRLLRUDRDLLLRRRLDDLUULUURLLDRDLUUULLDUDLLLLURDULLRUDUUULLDLRLDRLLULDUDUDRULLRRLULURUURLRLURRLRRRDDRLUDULURUDRRDLUDDRRDRUDRUDLDDRLRDRRLDDRLLDDDULDLRLDURRRRRULRULLUUULUUUDRRDRDRLLURRRRUULUDDUDDDLDURDRLDLLLLLRDUDLRDRUULU
URURRUUULLLLUURDULULLDLLULRUURRDRRLUULRDDRUDRRDUURDUDRUDDRUULURULDRLDRDDDLDLRLUDDRURULRLRLLLDLRRUDLLLLRLULDLUUDUUDRDLRRULLRDRLRLUUDDRRLLDDRULLLRLLURDLRRRRRLLDDRRDLDULDULLDLULLURURRLULRLRLLLLURDDRDDDUUDRRRDUUDDLRDLDRRLLRURUDUUUDLDUULLLRLURULRULRDRLLLDLDLRDRDLLLRUURDDUDDLULRULDLRULUURLLLRRLLLLLLRUURRLULRUUUDLDUDLLRRDDRUUUURRRDRRDULRDUUDULRRRDUUUUURRDUURRRRLDUDDRURULDDURDDRDLLLRDDURUDLLRURLRRRUDDLULULDUULURLUULRDLRDUDDRUULLLRURLDLRRLUDLULDRLUDDDRURUULLDLRLLLDULUDDRLRULURLRDRRDDLDLURUDDUUURRDDLUDDRDUULRRDLDRLLLULLRULRURULRLULULRDUD
RUDLLUDRRDRRLRURRULRLRDUDLRRLRDDUDRDLRRLLRURRDDLRLLRRURULRUULDUDUULDULDLRLRDLRDLRUURLDRLUDRRDDDRDRRRDDLLLRRLULLRRDDUDULRDRDUURLDLRULULUDLLDRUDUURRUDLLRDRLRRUUUDLDUDRRULLDURRDUDDLRURDLDRLULDDURRLULLRDDDRLURLULDLRUDLURDURRUDULDUUDLLLDDDUUURRRDLLDURRDLULRULULLRDURULLURDRLLRUUDDRRUDRDRRRURUUDLDDRLDRURULDDLLULULURDLDLDULLRLRDLLUUDDUDUDDDDRURLUDUDDDRRUDDLUDULLRDLDLURDDUURDLRLUUDRRULLRDLDDDLDULDUDRDUUULULDULUDLULRLRUULLDURLDULDRDLLDULLLULRLRD`

input2 = input2.split("\n");
function dayTwoPartOne(){
    let code = [];
    let keypad = [
        [1, 2, 3], //0
        [4, 5, 6], //1
        [7, 8, 9], //2
    //   0  1  2
    ]
    let col = 1;
    let row = 1;

    for(i in input2){
        let key = input2[i].split("");
        for(char of key) {
            switch(char){
                case 'U':
                    row--;
                    break;
                case 'D':
                    row++;
                    break;
                case 'R':
                    col++;
                    break;
                case 'L':
                    col--;
                    break;
            }

            if(row == 3){
                row = 2;
            }else if(row == -1){
                row = 0;
            }

            if(col == 3){
                col = 2;
            }else if(col == -1){
                col = 0;
            }
        }
        code.push(keypad[row][col])
    }
    return code;
}
// console.log(dayTwoPartOne())

function dayTwoPartTwo(){
    let code = [];
    let coords = [];
    let keypad = [
        ["", "x", "1", "x", ""],
        ["x", "2", "3", "4", "x"],
        ["5", "6", "7", "8", "9"],
        ["x", "A", "B", "C", "x"],
        ["", "x", "D", "x", ""],
    ]
    let col = 0;
    let row = 2;

    for(i in input2){
        console.log(keypad[row][col])
        let key = input2[i].split("");
        for(char of key) {
            switch(char){
                case 'U':
                    row--;
                    if(row == -1 || keypad[row][col] == "x"){
                        row++;
                    }
                    break;
                case 'D':
                    row++;
                    if(row == 5 || keypad[row][col] == "x"){
                        row--;
                    }
                    break;
                case 'R':
                    col++;
                    if(col == 5 || keypad[row][col] == "x"){
                        col--;
                    }
                    break;
                case 'L':
                    col--;
                    if(col == -1 || keypad[row][col] == "x"){
                        col++;
                    }
                    break;
            }
        }
        // coords.push(`${col + 1}, ${row + 1}`)
        code.push(keypad[row][col])
    }
    return code;
}
console.log(dayTwoPartTwo())

