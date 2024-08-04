import GameObject from "../../gameObjects/GameObject";

export interface SceneConfig {
    numStars: number;
    stars: GameObject[];
    maxDiameter: number; // Maximum diameter of the area
    densityFactor: number; // Control density of objects towards the centery
}