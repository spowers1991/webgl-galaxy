import GameObject from "../../gameObjects/GameObject";

export interface SceneConfig {
    numStars: number;
    stars: GameObject[];
    maxDiameter: number;
    densityFactor: number;
    galaxyRadius: number;
    galaxyThickness: number;
    numArms: number;
    spiralFactor: number;
    clusterRadius: number;
}
