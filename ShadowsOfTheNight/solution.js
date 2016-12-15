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
printErr('turns: ' + N);

// game loop
while (true) {
    var bombDir = readline();
    
    if (bombDir === 'DR') {
        X0 += 1;
        Y0 += 1;
    } else if (bombDir === 'D') {
        let batmanTourHeightDist = H - Y0;
        Y0 += Math.floor(batmanTourHeightDist / 2);
    } else if (bombDir === 'UR') {
        X0 += 1;
        Y0 -= 1;
    } else if (bombDir === 'U') {
        Y0 -= 1;
    }

    print(String(X0) + ' ' + String(Y0));
}
