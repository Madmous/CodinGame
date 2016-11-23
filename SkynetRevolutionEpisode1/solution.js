/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

var linkBetweenNodes = [];
var gatewayNodes = [];

for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    
    linkBetweenNodes.push(inputs);
    //var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    //var N2 = parseInt(inputs[1]);
}

for (var i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    gatewayNodes.push(EI);
}

// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn

    var linksWithGateway = nodesLinkedWithGateway(SI);
    
    for (var i = 0 ; i < linksWithGateway.length ; i++) {
        print(linksWithGateway[i]);
    }
    //print(SI + ' ' + gatewayNodes);
    
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    //print('0 1');
}

function nodesLinkedWithGateway(SI) {
    var links = [];
    
    for (var index in linkBetweenNodes) {
        var N1 = parseInt(linkBetweenNodes[index][0]);
        var N2 = parseInt(linkBetweenNodes[index][1]);
        
        printErr(N1);
        printErr(N2);
        printErr(gatewayNodes[0]);
        printErr(N1 === gatewayNodes[0]);
        
        if (N1 === gatewayNodes[0] || N2 === gatewayNodes[0] ) {
            links.push(N1 + ' ' + N2);
        }
    }
    return links;
}