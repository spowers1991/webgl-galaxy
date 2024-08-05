import * as BABYLON from 'babylonjs';
import Scene from './lib/constructors/scenes/Scene';

import 'babylonjs-inspector';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('renderCanvas') as HTMLCanvasElement;
    const engine = new BABYLON.Engine(canvas, true);

    let scene = new Scene(engine, canvas).getScene();

    engine.runRenderLoop(() => {
        scene.render();
    });
    
    engine.setHardwareScalingLevel(1);
    engine.enableOfflineSupport = false;
    engine.getCaps().textureFloat = true; // Ensure float textures are supported

    window.addEventListener('resize', () => {
        engine.resize();
    });
});
