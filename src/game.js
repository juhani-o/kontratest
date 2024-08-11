

import { Image, init, load, TileEngine, dataAssets, GameLoop } from 'kontra';

let { canvas, context } = init();

load('assets/future.png', 'assets/future.tsx', 'assets/map.json')
  .then(function() {
    let tileEngine = TileEngine(dataAssets['assets/future']);

  });


