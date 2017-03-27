
function gen4col_bt(solutions, vertices, whichVertex, work, stopAtOne) { // generate a 4-coloring through backtracking

  for (let color=0; color<4; ++color) {

    let color_burned = false;

    for (let neighbor = 0, neighborCap = vertices[whichVertex].neighbors.length; ((neighbor<neighborCap) && (!color_burned)); ++neighbor) {
      if (vertices[vertices[whichVertex].neighbors[neighbor]].color === color) { color_burned = true; }
    }

    if (!color_burned) {

      vertices[whichVertex].color = color;

      if (whichVertex === (vertices.length - 1)) {
        solutions.push( vertices.map(v => v.color) );
        if (stopAtOne) { return solutions[0]; }
      } else {
        var oneRowResult = gen4col_bt(solutions, vertices, whichVertex+1, work, stopAtOne);
        if (oneRowResult) { return oneRowResult; }
      }

      vertices[whichVertex].color = undefined;

    }

  }

}

function gen4col(vertices, stopAtOne) {
  gen4col(vertices.map(arr => { return { neighbors: vertices }; }), stopAtOne);
}

function gen4col_obj(vertices, stopAtOne) {
  var solutions = [],
      oneRow    = gen4col_bt(solutions, vertices, 0, [], stopAtOne);
  return oneRow? oneRow : solutions;
}

export { gen4col_bt, gen4col_obj, gen4col };
