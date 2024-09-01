import * as BABYLON from 'babylonjs';
import { SceneConfig } from '@/lib/constructors/scenes/configs/SceneConfig';
import { generateGalaxy } from '@/lib/constructors/gameObjects/prefabs/galaxies/actions/generateGalaxy';

export class Galaxy {
    private scene: BABYLON.Scene;
    private sceneConfig: SceneConfig;
    private oTypeClusters: { x: number, z: number }[] = [];

    constructor(scene: BABYLON.Scene, sceneConfig: SceneConfig) {
        this.scene = scene;
        this.sceneConfig = sceneConfig;
    }

    generate() {
        generateGalaxy(this.scene, this.sceneConfig, this.oTypeClusters);
    }
}
