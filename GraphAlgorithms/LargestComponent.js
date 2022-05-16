const largestComponent = (graph) => {
    const visited = new Set();
    let largest = 0;

    for(let node in graph)
    {
        const componentSize = componentSum(graph, node, visited);
        if(largest < componentSize)
        {
            largest = componentSize;
        }
    }
    return largest;
};

const componentSum = (graph, current, visited) => {
    if(visited.has(String(current)))
    {
        return 0;
    }
    visited.add(String(current)); 

    let size = 1;

    for(let neighbor of graph[current])
    {
        size += componentSum(graph, neighbor, visited);
    }
    return size;
};


console.log( largestComponent( {
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}) ); // -> 4