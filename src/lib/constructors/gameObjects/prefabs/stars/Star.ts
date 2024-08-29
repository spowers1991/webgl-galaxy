import * as BABYLON from 'babylonjs';
import GameObject from '@/lib/constructors/gameObjects/GameObject';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { autorun } from 'mobx';
import { StarConfig } from '@/lib/constructors/gameObjects/prefabs/stars/configs/starConfig';
import SunSurfaceTexture from '@/assets/T_SunSurfaceTexture.jpg';

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
        
        // Load and store the SunSurfaceTexture texture
        this.sunSurfaceTexture = (this.starConfig.type === 'K' || this.starConfig.type === 'M') ? new BABYLON.Texture(SunSurfaceTexture, scene) : null;
        
        this.setNormalTexture(this.sunSurfaceTexture)

        this.setDiffuseTexture(this.sunSurfaceTexture)

        this.setSpecularColor(new BABYLON.Color3(0, 0, 0))

        // Setup the sun emitter
        const sunEmitter = new BABYLON.SphereParticleEmitter();
        sunEmitter.radius = 1;
        sunEmitter.radiusRange = 0;

        // Setup Particles
        this.surfaceParticles = this.starConfig.particles.surface.particleSystem;
        this.flareParticles = this.starConfig.particles.flare.particleSystem;
        this.coronaParticles = this.starConfig.particles.corona.particleSystem;

        // Set emitters to the mesh
        this.surfaceParticles.emitter = this.mesh;
        this.flareParticles.emitter = this.mesh;
        this.coronaParticles.emitter = this.mesh;

        // Set rendering group ID
        this.mesh.renderingGroupId = 3;

        this.mesh.scaling = new BABYLON.Vector3(this.starConfig.diameter, this.starConfig.diameter, this.starConfig.diameter);

        // Observe global state changes
        this.observeGlobalState();
    }

    // Observable global state for active Stars
    private observeGlobalState() {
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
                    this.coronaParticles.renderingGroupId = 1;
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
