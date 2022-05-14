const unidirectedPath = (edges, start, end) => {
    const graph = buildGraph(edges);
    console.log(graph);
    return recursiveDepthFirstHasPathUnidirectional(graph, start, end, new Set());
}

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges){
        const [a,b] = edge;
        if( !(a in graph))
        {
            graph[a] = [];
        }
        if( !(b in graph))
        {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};

const recursiveDepthFirstHasPathUnidirectional = (graph, source, goal, visited) => {

    if( source == goal )
    {
        return true;
    }
    if(visited.has(source))
    {
        return false;
    }
    visited.add(source);

    for(let neighbor of graph[source])
    {
        if(recursiveDepthFirstHasPathUnidirectional(graph,neighbor,goal,visited) == true) {
            return true;
        }
    }
    return false;
}

const edges = [
    ['i','j'],
    ['k','i'],
    ['m','k'],
    ['k','l'],
    ['o','n']
];

console.log(unidirectedPath(edges, 'j', 'n'));