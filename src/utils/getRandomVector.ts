export function getRandomVector(): BABYLON.Vector3 {
    const x = Math.random() * 300 - 50; // Random value between -50 and 50
    const y = Math.random() * 300 - 50; // Random value between -50 and 50
    const z = Math.random() * 300 - 50; // Random value between -50 and 50
    return new BABYLON.Vector3(x, y, z);
}