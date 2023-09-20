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

1. Let $G_1 = (V_1, E_1)$ and $G_2 = (V_2,E_2)$ be graphs. Then $G_1$ is a **subgraph** of $G_2$ if and only if $V_1 \subseteq V_2$ and $E_1 \subseteq E_2$. We can write $G_1 \leq G_2$. The subgraph $G_1$ is a **spanning subgraph** if and only if $V_1 = V_2$.
2. A graph $P = (V,E)$ is a **path** if and only if the vertex set can be labelled $V = \{v_0,v_1,\dotsc,v_{n-1}\}$ such that
   $$E = \{ v_0 v_1, v_1 v_2, \dotsc, v_k v_{k+1},\dotsc v_{n-2}v_{n-1}\}.$$
   The vertices $v_0$ and $v_{n-1}$ are the **ends** of the path.
3. A graph $C = (V,E)$ is a **cycle** if and only if the vertex set can be labelled $V = \{v_0,v_1,\dotsc,v_{n-1}\}$ such that
   $$E = \{ v_0 v_1, v_0v_{n-1}, v_1 v_2, \dotsc, v_k v_{k+1},\dotsc v_{n-2}v_{n-1}\};$$
   that is to say, $C$ consists of a path along with one additional edge connecting the ends of the path. A graph containing no cycles as subgraphs is called **acyclic**.
4. A graph $G = (V,E)$ is **connected** if and only if for every two vertices $u$ and $v$ there is at least one path $P$ a subgraph of $G$, with $u$ and $v$ as its ends.
5. A connected acyclic graph is called a **tree**.
6. A subgraph $G_1$ of a graph $G_2$ is **maximally connected** if there is no subgraph $G_3$ of $G_2$ satisfying $G_1 \leq G_3 \leq G_2$ where $G_3$ is connected. The maximally connected subgraphs of a give graph are called its **components**.
7. In general, an acyclic graph is called a **forest**; its components are trees.

While that is quite a long list of terminology, the ideas are uncomplicated, and give rise to a neat problem.

## Goal: Minimum Spanning Trees

> Given an edge-weighted graph $G=(V,E,w)$, can we find a spanning subgraph which is a tree (or forest) of minimum total edge weight?

Consider again our example graph.

![graph](../generated-assets/latex-image/img-smallnetwork.svg)

Students may have different ways to approach this problem.