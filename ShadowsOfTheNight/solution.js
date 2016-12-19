/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);

printErr('inputs: ' + inputs);    
printErr('height: ' + H);  
printErr('width: ' + W);
printErr('turns: ' + N);

// game loop
while (true) {
    const bombDir = readline();
    const batmanTourWidthDist = W - X0;
    const batmanTourHeightDist = H - Y0;
    
    printErr('bombDir ' + bombDir);
    printErr('batmanTourWidthDist ' + batmanTourWidthDist);
    printErr('batmanTourHeightDist ' + batmanTourHeightDist);
    
    let batmanPosition; 
    
    if (bombDir === 'DR') {
        X0 += Math.floor(batmanTourWidthDist / 2);
        Y0 += Math.floor(batmanTourHeightDist / 2);
    } else if (bombDir === 'D') {
        Y0 += Math.floor(batmanTourHeightDist / 2);
    } else if (bombDir === 'UR') {
        X0 += Math.floor(batmanTourWidthDist / 2);
        Y0 -= Math.floor(batmanTourHeightDist / 2);
    }  else if (bombDir === 'UL') {
        X0 -= Math.floor(batmanTourWidthDist / 2);
        Y0 -= Math.floor(batmanTourHeightDist / 2);
    } else if (bombDir === 'U') {
        Y0 -= 1;
    }

    print(String(X0) + ' ' + String(Y0));
}

function calculateDiagonaleDist(height, width) {
    let res = 0;
    
    res = Math.sqrt(Math.pow(height, 2) * Math.pow(width, 2));
    
    return res;
}

