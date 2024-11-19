import { Sprite } from './pixi';

export default async (app, textures, w, h) => {
    const speed = 1;

    const seaSprites = [];
    const count = 3; // Количество спрайтов

    for (let i = 0; i < count; i++) {
        const sea = Sprite.from(textures.sea);
        sea.width = w;
        sea.height = h;
        sea.y = 0;
        app.stage.addChild(sea);
        seaSprites.push(sea);
    }

    let counter = 0;

    app.ticker.add((delta) => {
        counter += speed; // Скорость прокрутки, можно сделать параметром
        seaSprites.forEach((sea, index) => {
            sea.x = w * (index - 1) + (counter % w);
        });
    });

}