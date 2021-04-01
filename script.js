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
console.log(dayOne(2))