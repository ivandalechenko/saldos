import { Application, Container, Sprite } from './pixi';
import loadTextures from './boatTextures'
import boatSea from './boatSea';

export default async () => {
    const app = new Application();
    const textures = await loadTextures();

    const w = window.innerWidth;
    const h = window.innerHeight;

    const elw = w > 800 ? w / 2 : w;

    await app.init({
        background: '#0BEEFF', width: w, height: h
    });

    document.getElementById('joinUs_newBg').appendChild(app.canvas);

    boatSea(app, textures, elw, h)


    // app.ticker.add((delta) => {
    //     flappyStore.tik(w, h)
    //     flappyBgMove(app, flappyStore.position / 2)
    //     flappyBearMove(app, textures, flappyStore.bearPosition, delta.lastTime)
    //     flappyCloudsMove(app, flappyStore.position, w)
    //     flappyWalls(app, textures, flappyStore.walls, flappyStore.position, flappyStore.betweenWalls, w, h)
    // })


    // flappyBgInit(app, textures, h)
    // flappyCloudsInit(app, textures, w, h)
    // flappyBearInit(app, textures, w, flappyStore.bearPosition)
    // const scene = new Container();
    // scene.label = 'scene';

}