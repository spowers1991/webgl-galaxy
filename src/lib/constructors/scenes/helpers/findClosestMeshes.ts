import * as BABYLON from 'babylonjs';

/**
 * Finds the closest meshes to a given mesh.
 * @param scene - The Babylon.js scene instance.
 * @param referenceMesh - The mesh to find the closest meshes to.
 * @param maxDistance - The maximum distance within which to find meshes.
 * @returns An array of meshes that are closest to the reference mesh.
 */
export function findClosestMeshes(scene: BABYLON.Scene, referenceMesh: BABYLON.AbstractMesh, maxDistance: number = 10): BABYLON.Mesh[] {
    const closestMeshes: BABYLON.Mesh[] = [];

    // Ensure the reference mesh is valid
    if (!referenceMesh || !(referenceMesh instanceof BABYLON.Mesh)) {
        console.error('The reference mesh is invalid or not an instance of BABYLON.Mesh.');
        return closestMeshes;
    }

    const referencePosition = referenceMesh.getAbsolutePosition();

    // Add the reference mesh itself to the closest meshes array
    closestMeshes.push(referenceMesh);

    // Iterate over the meshes in the scene
    scene.meshes.forEach((mesh) => {
        // Ensure the mesh is a valid BABYLON.Mesh and is not the reference mesh
        if (mesh instanceof BABYLON.Mesh && mesh !== referenceMesh) {
            try {
                const distance = BABYLON.Vector3.Distance(referencePosition, mesh.getAbsolutePosition());
                if (distance <= maxDistance) {
                    closestMeshes.push(mesh);
                }
            } catch (error) {
                console.warn('Error calculating distance for a mesh:', error);
            }
        }
    });

    // Sort the closest meshes by distance to the reference mesh
    closestMeshes.sort((a, b) => {
        const distanceA = BABYLON.Vector3.Distance(referencePosition, a.getAbsolutePosition());
        const distanceB = BABYLON.Vector3.Distance(referencePosition, b.getAbsolutePosition());
        return distanceA - distanceB;
    });

    return closestMeshes;
}
