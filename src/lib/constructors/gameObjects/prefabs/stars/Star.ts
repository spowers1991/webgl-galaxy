import * as BABYLON from 'babylonjs';
import GameObject from '@/lib/constructors/gameObjects/GameObject';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';
import { StarConfig } from '@/lib/constructors/gameObjects/prefabs/stars/configs/starConfig';
import { setupParticleEmitters } from './helpers/setupParticleEmitters';
import SunSurfaceTexture from '@/assets/T_SunSurfaceTexture.jpg'

export default class Star extends GameObject {
    public surfaceParticles: BABYLON.ParticleSystem;
    public flareParticles: BABYLON.ParticleSystem;
    public coronaParticles: BABYLON.ParticleSystem;
    public starConfig: StarConfig;
    private sunSurfaceTexture: BABYLON.Texture | null;

    constructor(name: string, scene: BABYLON.Scene, starConfig: StarConfig) {
        super(name, scene);

        this.starConfig = starConfig; 

        // Setup mesh
        this.setMesh(BABYLON.MeshBuilder.CreateSphere('star.' + this.starConfig.id + '.mesh', { diameter: 2.01, segments: 64 }, this.scene));
        
        // Setup material
        this.setMaterial(new BABYLON.StandardMaterial("sun.material", scene));
       
        // Set emissive color and intensity
        this.setEmissiveColor(this.starConfig.color, this.starConfig.luminosity)

        if (this.starConfig.type === "M" || this.starConfig.type === "K"){ 
            this.setNormalTexture(new BABYLON.Texture(SunSurfaceTexture, scene))
            this.setDiffuseTexture(new BABYLON.Texture(SunSurfaceTexture, scene))
       }

        // Setup particles using the helper function
        setupParticleEmitters(this.mesh, this.starConfig, this);

        // Set rendering group ID
        this.mesh.renderingGroupId = 3;
        this.mesh.scaling = new BABYLON.Vector3(this.starConfig.diameter, this.starConfig.diameter, this.starConfig.diameter);

        // Observe global state changes
        this.observeGlobalState(scene);
    }

    // Observable global state for active Stars
    private observeGlobalState(scene) {
        autorun(() => {
            const objectsToRender = sceneState.getObjectsToRender().slice();
            const objectInView = objectsToRender.some(obj => obj === this.mesh);
            
            if (objectInView) {

                // Start particles if the condition is met
                this.surfaceParticles.start();
                this.flareParticles.start();
                this.coronaParticles.start();
                // Find current Star and set the entire Object to setActiveObject
                if (sceneState.getActiveObject().pickedMesh === this.mesh) {
                    sceneState.setActiveObject(this);
                    this.flareParticles.renderingGroupId = 1;
                    this.coronaParticles.renderingGroupId = 3;
                }
            } else {
                // Optionally, you can stop particles if the condition is not met
                this.surfaceParticles.stop();
                this.flareParticles.stop();
                this.coronaParticles.stop();
            }
        });
    }
}
