

import { init, load, TileEngine, dataAssets, GameLoop } from 'kontra';

let { context } = init();

load('assets/future.png', 'assets/kontra_future.json')
.then(assets => {
    let tileEngine = TileEngine(dataAssets['assets/kontra_future']);

    let sx = 1;
    let loop = GameLoop({
      update: function() {
        tileEngine.sx += sx;

        if (tileEngine.sx < 0 || tileEngine.sx >= 320) {
          sx = -sx;
        }
      },
      render: function() {
        tileEngine.render();
        console.log("Rendering :", tileEngine);
      }
    });

    loop.start();
  });
