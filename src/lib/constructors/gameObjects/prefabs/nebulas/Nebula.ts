import * as BABYLON from 'babylonjs';
import GameObject from '@/lib/constructors/gameObjects/GameObject';
import { autorun } from 'mobx';
import { NebulaConfig } from '@/lib/constructors/gameObjects/prefabs/nebulas/configs/NebulaConfig';
import { setupParticleEmitters } from './helpers/setupParticleEmitters';

export default class Nebula extends GameObject {
    public nebulaParticles: BABYLON.ParticleSystem;
    public nebulaConfig: NebulaConfig;

    constructor(name: string, scene: BABYLON.Scene, nebulaConfig: NebulaConfig, clusterPos: { x: number, z: number } ) {
        super(name, scene);
       
        // Setup mesh
        this.setMesh(BABYLON.MeshBuilder.CreateSphere('nebula.' + "1" + '.mesh', { diameter: 0.01, segments: 64 }, this.scene));
        
        // Setup material
        this.setMaterial(new BABYLON.StandardMaterial("sun.material", scene));
       
        // Set emissive color and intensity
        this.setEmissiveColor(new BABYLON.Color3(1, 1, 1), 5)

        this.setPosition(clusterPos.x, 0, clusterPos.z)

        // Setup particles using the helper function
        setupParticleEmitters(this.mesh, nebulaConfig, this);

        // Set rendering group ID
        this.mesh.renderingGroupId = 3;
       // this.mesh.scaling = new BABYLON.Vector3(this.nebulaConfig.diameter, this.nebulaConfig.diameter, this.nebulaConfig.diameter);

       this.nebulaParticles.start(); 
    
    }
   
}
