

import { init, load, TileEngine, dataAssets, GameLoop } from 'kontra';

let { context } = init();

load('assets/future.png', 'assets/kontra_future.json')
.then(assets => {
    const imageAssets = dataAssets['assets/kontra_future'];
    let tileEngine = TileEngine(imageAssets);
    let sx = 1;
    context.scale(4, 4);
    let loop = GameLoop({
      update: function() {
        tileEngine.sx += sx;

        if (tileEngine.sx < 0 || tileEngine.sx >= 320) {
          sx = -sx;
        }
      },
      render: function() {
        tileEngine.render();
      }
    });

    loop.start();
  });
