/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var mimeByExtension = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0]; // file extension
    var MT = inputs[1]; // MIME type.
    mimeByExtension[EXT.toLowerCase()] = MT;
}
for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    if (FNAME.indexOf('.') < 0) {
        print('UNKNOWN');
    } else {
        var fileExt = FNAME.split('.');
        var mimeByFileExt = mimeByExtension[fileExt[fileExt.length - 1].toLowerCase()];
        
        if (mimeByFileExt !== undefined) {
            print(mimeByFileExt);
        } else {
            print('UNKNOWN');    
        }
    }
}