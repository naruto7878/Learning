// source details where node begins
const depthFirstPrint = (graph, source) => {
    const stack = [ source ];

    while (stack.length >0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
};

const recursiveDepthFirstPrint = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]) { // get an array from the value of the source
        depthFirstPrint(graph,neighbor);
    }
};

const breadthFirstPrint = (graph, source) => {
    const queue = [ source ];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

 

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

//depthFirstPrint(graph, 'a');

//recursiveDepthFirstPrint(graph, 'a');

breadthFirstPrint(graph, 'a');