const inputs = readline().split(' ');

const N = parseInt(inputs[0]);
const L = parseInt(inputs[1]);
const E = parseInt(inputs[2]);

let linkBetweenNodes = [];
let gatewayNodes     = [];

const parseElement = function(element) {
    return {
        N1 : parseInt(element[0]),
        N2 : parseInt(element[1])
    };
};

const nodesLinkedWithAgent = function(SI) {
    let links = [];
    
    linkBetweenNodes.forEach((element) => {
        const {N1, N2} = parseElement(element);
        
        if (N1 === SI || N2 === SI) {
            links.push(element);
        }
    });
    
    return links;
};

 const getAgentGatewayLinks = function(linksWithAgent) {
    let agentGatewayLink = [];
    
    linksWithAgent.forEach((element) => {
        const {N1, N2} = parseElement(element);
        
        if (gatewayNodes.indexOf(N1) !== -1  ||
            gatewayNodes.indexOf(N2) !== -1) {
                
            printErr(element);
                
            agentGatewayLink.push(N1 + ' ' + N2);
        }
    });

    return agentGatewayLink;
};

for (let i = 0; i < L; i++) {
    const inputs = readline().split(' ');
    
    linkBetweenNodes.push(inputs);
}

for (let i = 0; i < E; i++) {
    const EI = parseInt(readline());
    
    gatewayNodes.push(EI);
}

while (true) {
    const SI = parseInt(readline());
    const linksWithAgent = nodesLinkedWithAgent(SI);
    const agentGatewayLink = getAgentGatewayLinks(linksWithAgent);
    
    if (agentGatewayLink.length > 0){
        print(agentGatewayLink[0]);
    } else {
        const {N1, N2} = parseElement(linksWithAgent[0]);
        
        print(N1 + ' ' + N2);
    }
}



