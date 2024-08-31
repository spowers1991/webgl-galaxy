export interface ParticleSystems {
    nebula: any;
}

export interface NebulaConfig {
    id: number;
    name: string;
    type: string; 
    diameter: number;
    particles: ParticleSystems; 
    color: BABYLON.Color3;
    luminosity: number;
}
