/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var pi = [];

var res;

for (var i = 0; i < N; i++) {
    pi.push(parseInt(readline())); 
}
pi = pi.sort(function(a,b) {
    return a - b;    
});
piLength = pi.length;

for (var i = 0 ; i < piLength; i++) {
    var powerDifference = pi[i + 1] - pi[i];
    if (res === undefined) {
        res = powerDifference;
    } else if (powerDifference < res) {
        res = powerDifference;
    }    
}

print(res);