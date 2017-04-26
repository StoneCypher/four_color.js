# four_color.js
Four coloring of a graph, for Javascript

## Wossis
Given a map represented as an array of arrays, provide color indices for the cells such that no two adjacent cells have the same color.

That is, "color the map."  With a continuous 2d map, this is always possible with no more than four colors.

## What
Given a blank map

![](/assets/blank%2048.png)

You can represent a map as an "adjacency matrix" (here's an [adjacency matrix for US states](https://github.com/StoneCypher/state_adjacency_matrix.js) for javascript,)

```javascript
const states = ["AK", "AL", "AR", ...];

const state_adjacency = [
  [],
  [25, 42, 10, 09],
  [24, 42, 25, 18, 43, 36],
  ...
];
```

This says "state 0 is Alaska, which has no neighbors; state 1 is Alabama, which has neighbors 25 (Missouri,) 42 (Tennessee,) 10 (Georgia,) and 9 (Florida;) state 2 is Arkansas..."

If you have such a matrix, feed it to this library:

```javascript
> gen4col(state_adjacency, true);  // true means "only give me one solution;" otherwise you'll get a bunch
[0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 2, 1, 0, 0, 1, 0, 0, 2, 2, 1, 1, 0, 1, 2, 3, 3, 2, 0, 0, 2, 2, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 3, 0, 1, 3, 0, 3]
```

This says "Paint Alaska in color 0, Alabama in 0, Arkansas in 0, Arizona in 0, California in 1, Colorado in 1," and so forth.  This allows you to produce a different map:

![](/assets/4-colored%2048.png)

## API

There is only one method: `gen4col(vertexArray, returnOnlyOne)`.

### `gen4col(vertexArray, returnOnlyOne)`

`vertexArray` is an `array` of `array`s, where the master offset is the vertex ID, and the items in the subordinate arrays are the connected vertices.  All links should be listed bidirectionally.

`returnOnlyOne` is a `boolean` which tells the algorithm whether to return only the first solution it finds, or every solution.