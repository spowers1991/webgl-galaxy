// Function to generate cluster positions for O-type stars
export function calculateClusterPosition(centerX: number, centerZ: number, clusterRadius: number): { x: number, z: number } {
    const angle = Math.random() * 2 * Math.PI;
    const radius = clusterRadius * Math.sqrt(Math.random());
    return {
        x: centerX + radius * Math.cos(angle),
        z: centerZ + radius * Math.sin(angle)
    };
}
