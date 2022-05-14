//start with depth first approach

const recursiveDepthFirstHasPath = (graph, source, goal) => {
    if( source == goal )
    {
        return true;
    }

    for(let neighbor of graph[source])
    {
        if(recursiveDepthFirstHasPath(graph,neighbor,goal) == true) {
            return true;
        }
    }
    return false;
}

const breadthFirstHasPath = (graph, source, goal) => {
    const queue = [ source ];
    while(queue.length > 0)
    {
        const current = queue.shift();
        if(current == goal)
        {
            return true;
        }
        for(let neighbor of graph[current]) {  
            queue.push(neighbor);
        }
    }
    return false;
}


/*
const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}*/

const graph = {
    f: ['g','i'],
    g: ['h'],
    h: [],
    i: ['g','k'],
    j: ['i'],
    k: []
};

console.log(recursiveDepthFirstHasPath(graph, 'f', 'k'));

console.log(breadthFirstHasPath(graph, 'f', 'k'));