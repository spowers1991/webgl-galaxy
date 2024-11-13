import * as BABYLON from 'babylonjs';
import Scene from './lib/constructors/scenes/Scene';

import 'babylonjs-inspector';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas') as unknown;
    const engine = new BABYLON.Engine(canvas as HTMLCanvasElement, true);

    let scene = new Scene(engine, canvas as HTMLCanvasElement).getScene();

    engine.runRenderLoop(() => {
        scene.render();
    });

    window.addEventListener('resize', () => {
        engine.resize();
    });
});
