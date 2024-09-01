import GameObject from "../../gameObjects/GameObject";

export interface SceneConfig {
    numStars: number;
    stars: GameObject[];
    maxDiameter: number; // Maximum diameter of the area
    densityFactor: number; // Control density of objects towards the centery
    galaxyRadius: number,    // Maximum radius of the galaxy
    galaxyThickness: number,  // Thickness of the galaxy in the vertical direction
    numArms: number,            // Number of spiral arms
    spiralFactor: number,       // Factor to control the tightness of the spirals
    clusterRadius: number, 
}