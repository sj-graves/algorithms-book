## Thinking about CP-00

visited_vertices = [
   [0, None, None], [1, None, None], [2, None, None], [3, None, None], 
   [4, None, None], [5, None, None], [6, None, None], [7, None, None]
   ]

start_vertex = 0
visited_vertices[start_vertex][2] = 0

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

cheapest_known_path_to = [
    [0, None, None],[1, None, None],[2, None, None],[3, None, None],
    [4, None, None],[5, None, None],[6, None, None],[7, None, None]
    ]