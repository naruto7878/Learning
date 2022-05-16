const shortestPath = (edges, star, end) => {
    const graph = buildGraph(edges);
};

const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges)
    {
        const[a,b] = edge;
        if(!(a in graph) )
        {
            graph[a] = [];
        }
        if(!(b in graph) )
        {
            graph[b] = [];
        }
        graph[a].push(b);
        graph[b].push(a);
    }
};

const shortestBreadthFirstHasPath = (graph, , end)