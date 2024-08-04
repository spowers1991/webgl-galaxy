import { Particles } from "@/utils/particles";

export interface ParticleSystems {
    corona: any;
    flare: any;
    surface: any;
}

export interface StarConfig {
    id: number;
    name: string;
    type: string; 
    diameter: number;
    color: BABYLON.Color3;
    luminosity: number;
    particles: ParticleSystems; 
}
