import * as BABYLON from 'babylonjs';
import Camera from '@/lib/constructors/cameras/Camera';
import { SceneConfig } from './configs/SceneConfig';
import { updateClickEvents } from './actions/updateClickEvents';
import { updateScrollEvents } from './actions/updateScrollEvents';
import { Galaxy } from '@/lib/constructors/gameObjects/prefabs/galaxies/Galaxy';
import UIEngine from '@/lib/constructors/ui/UIEngine';

const sceneConfig: SceneConfig = {
    numStars: 100,
    stars: [],
    densityFactor: 0.5,
    galaxyRadius: 300,    // Maximum radius of the galaxy
    galaxyThickness: 150,  // Thickness of the galaxy in the vertical direction
    numArms: 4,            // Number of spiral arms
    spiralFactor: 5,       // Factor to control the tightness of the spirals
    clusterRadius: 50,    // Radius for O-type star clusters
};

export default class Scene {
    private config: SceneConfig;
    private scene: BABYLON.Scene;
    private camera: Camera;
    private glowLayer: BABYLON.GlowLayer; 

    constructor(engine: BABYLON.Engine, canvas: HTMLCanvasElement, config?: SceneConfig) {
        this.config = { ...sceneConfig, ...config };
        this.scene = new BABYLON.Scene(engine);
        
        // Setup environment
        const backgroundColor = new BABYLON.Color4(0, 0, 0, 1);
        this.camera = new Camera(this.scene, canvas, "Main Camera", backgroundColor);

        this.glowLayer = new BABYLON.GlowLayer("glow", this.scene);
        this.glowLayer.intensity = 1.25; 

        const galaxy = new Galaxy(this.scene, sceneConfig);
        galaxy.generate();

        updateClickEvents(this.scene, this.camera);
        
        updateScrollEvents(this.scene, this.camera);

        new UIEngine('ui-container', this.config.stars, this.camera, this);

    }

    getScene(): BABYLON.Scene {
        return this.scene;
    }
}
