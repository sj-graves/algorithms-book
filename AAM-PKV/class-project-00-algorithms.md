---
type: basic-note,
tags: TAGS
Created on: 2023-09-20
filename: class-project-00-algorithms
---

# Class Project 00 Algorithms

Consider the diagram:

![graph](../generated-assets/latex-image/img-smallnetwork.svg)

Let us define a **graph** $G = (V,E)$ to be a set $V$ of **vertices** along with a set $E$ of **edges** consisting of unordered pairs of vertices; that is, $E \subseteq \{\{v_1,v_2\}: v_1,v_2\in V\}$. For the sake of convenience, we will denote the edge $\{v_k,v_\ell\}$ as $v_iv_j$, where $i=\min(k,\ell)$ and $j=\max(k,\ell)$. An **edge-weighted** graph $G=(V,E,w)$ also has a function $w:E\to \Omega$, where $\Omega$ is some set of **weights** (usually non-negative real numbers).

With this definition in hand, we should see that the diagram is a visual depiction of an edge-weighted graph, where the vertices are $V=\{v_0,v_1,v_2,v_3,v_4,v_5,v_6,v_7\}$, the edges are depicted by line segments, and the edge weights are depicted by the small, boxed numbers.

In order to set up an interesting problem, we need a few more definitions.

1. Let $G_1 = (V_1, E_1)$ and $G_2 = (V_2,E_2)$ be graphs. Then $G_1$ is a **subgraph** of $G_2$, denoted $G_1 \leq G_2$, if and only if $V_1 \subseteq V_2$ and $E_1 \subseteq E_2$. The subgraph $G_1$ is a **spanning subgraph** if and only if $V_1 = V_2$.
2. A graph $P = (V,E)$ is a **path** if and only if the vertex set can be labelled $V = \{v_0,v_1,\dotsc,v_{n-1}\}$ such that
   $$E = \{ v_0 v_1, v_1 v_2, \dotsc, v_k v_{k+1},\dotsc v_{n-2}v_{n-1}\}.$$
   The vertices $v_0$ and $v_{n-1}$ are the **ends** of the path.
3. A graph $C = (V,E)$ is a **cycle** if and only if the vertex set can be labelled $V = \{v_0,v_1,\dotsc,v_{n-1}\}$ such that
   $$E = \{ v_0 v_1, v_0v_{n-1}, v_1 v_2, \dotsc, v_k v_{k+1},\dotsc v_{n-2}v_{n-1}\};$$
   that is to say, $C$ consists of a path along with one additional edge connecting the ends of the path.
4. A graph containing no cycles as subgraphs is called **acyclic**.
5. A graph $G = (V,E)$ is **connected** if and only if for every two vertices $u$ and $v$ there is at least one path $P$ a subgraph of $G$, with $u$ and $v$ as its ends.
6. A connected acyclic graph is called a **tree**.
7. A subgraph $G_1$ of a graph $G_2$ is **maximally connected** if there is no subgraph $G_3$ of $G_2$ satisfying $G_1 \leq G_3 \leq G_2$ where $G_3$ is connected. The maximally connected subgraphs of a give graph are called its **components**.
8. In general, an acyclic graph is called a **forest**; its components are trees.

While that is quite a long list of terminology, the ideas are uncomplicated, and give rise to a neat problem.

## Goal: Minimum Spanning Trees

> Given an edge-weighted graph $G=(V,E,w)$, can we find a spanning subgraph which is a tree (or forest) of minimum total edge weight?

Consider again our example graph.

![graph](../generated-assets/latex-image/img-smallnetwork.svg)

Students may have different ways to approach this problem.

### Vertex-focused approach

Since we intend to connect every vertex of this obviously connected graph in a single tree of minimum weight, we know that every vertex will eventually be included; what will be interesting is the edges which we use while constructing the tree. Since there is no particular reason to favor any one vertex over another as a starting point, we choose $v_0$ because it is the lowest-indexed vertex. Since we will start from $v_0$, we have not used any edges to get to $v_0$, so we want to note that fact; likewise, the cost in edge weight of including the vertex $v_0$ is `0`, since it is our initial vertex. We should keep track of all those values, and as we add other vertices to our tree we will think of those few ideas: what vertex is being added, what was the other end of the edge used to add it, and what is the total cost in terms of edge weight to add the vertex in this way. Since we will be adding to this list as we proceed, it makes more sense to think of this as a programming variable than a mathematical variable.

> Once a value is assigned to a mathematical variable, mathematicians do not resuse the symbol to mean some other value, at least not within the same context. In programming, this is not necessarily so: a **programming variable** is simply the assignment of a name to a particular value at a particular stage of the execution of a program. At later stages of execution, the value of any given variable is likely to change. Some languages, like Python, allow you to freely **mutate** the value assigned to any name, even to changing what kind of data is stored in a given name. Other languages (Ada, for instance) allow mutation of value but are **strongly typed**, meaning that once a particular value is assigned to a name, only that kind of value can be assigned to that name. At the other end of the spectrum from Python is Rust, which is strongly typed and also requires that any variable which is to have its value changed is explicitly declared as being **mutable**, and any variable not declared as mutable is **immutable** and cannot have its assigned value changed!

Let us start a list of the vertices, and for each we will note what vertex was used to connect them to the tree and what the total cost of doing so was, remarking that a cost of `None` means that the vertex has not been connected.

```python
visited_vertices = [
   [0, None, None], [1, None, None], [2, None, None], [3, None, None], 
   [4, None, None], [5, None, None], [6, None, None], [7, None, None]
   ]
```

When we write a sequence of values enclosed in  square brackets (`[...]`), that is a `list`. The elements of lists can be changed individually (because *lists are mutable*) and we start counting their elements at `0`. As of now, the `visited_vertices` list consists of eight elements, indexed from `0` through `7`, each of which in turn is a list of three elements, indexed from `0` to `2`. Since we want to start our tree by visiting $v_0$ for free, we can write the following:

```python
current_vertex = 0
visited_vertices[current_vertex][2] = 0
```

Now we are in a bind: we only have a picture which tells us which edges exist and what weight is assigned to each. We need to store that information somehow in a variable.

```python
weighted_edges = (
   (None, 16, None, 12, None, None, None, None, 4), #0
   (16, None, 14, None, 17, 6, None, None),         #1
   (None, 14, None, None, None, None, 9, 5),        #2
   (12, None, None, None, None, None, None, 15),    #3
   (None, 17, None, None, None, None, 6, 13),       #4
   (None, 6, None, None, None, None, 12, None),     #5
   (None, None, 9, None, 6, 12, None, 3),           #6
   (4, None, 5, 15, 13, None, 3, None)              #7
)
```

Now we can see that there are only three choices for the next vertex to add to our list: vertices $v_1$, $v_3$, and $v_7$ correspond to the entries in `weighted_edges[0]` which are different from `None`. We can see by visual inspection that the least expensive of these edges is located in index `7` of `weighted_edges[0]`. So we can say

```python
current_vertex = 7
visited_vertex[current_vertex] = [7, 0, 4]
```

Now `visited_vertex[7]` tells us that the vertex `7` was added via `0` and it cost `4` to add it. It seems in this example that somehow it is redundant to store the number indexing the vertex in the elements of the list when the indices of the list contain the same value, but we already made that choice and so have to stick with it.