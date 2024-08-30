export function calculateZoomSensitivity(diameter: number): number {
    // Ensure diameter is a positive number to avoid division by zero or negative sensitivity
    if (diameter <= 0) {
        return 0.01; // Default zoom sensitivity
    }

    // Calculate the zoom sensitivity based on the star's diameter
    return (diameter / 100) + 0.01;
}
