/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis
var neighboursByNodePosition = {};

var nodePositions = [];

for (var i = 0; i < height; i++) {
    var line = readline(); // width characters, each either 0 or 
    
    var nodes = [];
    
    for (var j = 0 ; j < line.length ; j++) {
        nodes.push(line[j]); 
    }
    
    nodePositions.push(nodes);
}

for (var i = 0 ; i < height; i++) {
    
    for (var j = 0 ; j < width ; j ++) {
    
        if (nodePositions[i][j] === '0') {
        
            var nodeCoordinate = j + '' + i;
            var nodePositionX = isNodePresentOnX(nodePositions[i]);
            var nodePositionY = isNodePresentOnY(nodePositions, i);
            
            if (neighboursByNodePosition[nodeCoordinate] === undefined) {
                var neighbours = [];
                
                neighbours.push(j, i);
                
                neighboursByNodePosition[nodeCoordinate] = neighbours;
            }
            
            if (nodePositionX !== -1 ) {
                neighboursByNodePosition[nodeCoordinate].push(nodePositionX, i);
            } else {
                neighboursByNodePosition[nodeCoordinate].push(-1, -1);
            }
            
            if (nodePositionY !== -1) {
                neighboursByNodePosition[nodeCoordinate].push(j, nodePositionY);
            } else {
                neighboursByNodePosition[nodeCoordinate].push(-1, -1);
            }
        }
    }
}

for (var key in neighboursByNodePosition) {
    print(neighboursByNodePosition[key].join(' '));
}

function isNodePresentOnX(element) {
    for (var i = j + 1; i < element.length; i++) {
                
        if (element[i] === '0') {
            return i;
        }
    }
    return -1;
}

function isNodePresentOnY(element, k) {
    for (var i = k + 1; i < element.length; i++) {
        if (element[i][j] === '0') {
            return i;
        }
    }
    return -1;
}