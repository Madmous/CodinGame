var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways

var linkBetweenNodes = [];
var gatewayNodes = [];

for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    
    linkBetweenNodes.push(inputs);
}

for (var i = 0; i < E; i++) {
    var EI = parseInt(readline());
    
    gatewayNodes.push(EI);
}

while (true) {
    var SI = parseInt(readline());
    
    var linksWithAgent = nodesLinkedWithAgent(SI);
    var agentGateway = agentGatewayLink(linksWithAgent);
    
    if (agentGateway.length > 0){
        print(agentGateway[0]);
    } else {
        var N1 = parseInt(linksWithAgent[0][0]);
        var N2 = parseInt(linksWithAgent[0][1]);
        
        print(N1 + ' ' + N2);
    }
}

function nodesLinkedWithAgent(SI) {
    var links = [];
    
    linkBetweenNodes.forEach((element) => {
        var N1 = parseInt(element[0]);
        var N2 = parseInt(element[1]);
        
        if (N1 === SI || N2 === SI) {
            links.push(element);
        }
    });
    
    printErr(links);
    
    return links;
}

function agentGatewayLink(linksWithAgent) {
    var agentGatewayLink = [];
    
    linksWithAgent.forEach((element) => {
        var N1 = parseInt(element[0]);
        var N2 = parseInt(element[1]);
        
        if (gatewayNodes.indexOf(N1) === 0  ||
            gatewayNodes.indexOf(N2) === 0) {
                
            agentGatewayLink.push(N1 + ' ' + N2);
        }
    });

    return agentGatewayLink;
}




