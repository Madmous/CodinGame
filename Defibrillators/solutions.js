/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var LON = readline();
var LAT = readline();
var N = parseInt(readline());

var userCoordinate = {
    lon: parseFloat(LON.replace(",", ".")),
    lat: parseFloat(LAT.replace(",", "."))
};

var res = {};

for (var i = 0; i < N; i++) {
    var DEFIB = readline();
    var defibAfterSplit = DEFIB.split(';');

    var defibCoordinate = {
        lon: parseFloat(defibAfterSplit[4].replace(",", ".")),
        lat: parseFloat(defibAfterSplit[5].replace(",", "."))
    };

    var distance = calculateDistance(defibCoordinate, userCoordinate);

    if (res.distance === undefined) {
        res.distance = distance;
        res.name = defibAfterSplit[1];
    } else if (res.distance > distance) {
        res.distance = distance;
        res.name = defibAfterSplit[1];
    }
}
print(res.name);

function calculateDistance(defibCoordinate, userCoordinate) {
    var x = (defibCoordinate.lon - userCoordinate.lon) * 
                Math.cos(defibCoordinate.lat + userCoordinate.lat) / 2;
    var y = defibCoordinate.lat - userCoordinate.lat;
    return Math.sqrt(Math.abs(x * x + y * y)) * 6371;
}