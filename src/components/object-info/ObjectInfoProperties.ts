export default function ObjectInfoProperties(activeObject: any, property: string) {
    if (!activeObject || !activeObject[property]) {
        return 'No active star';
    }

    const starInfo = activeObject[property];
    return `
        <div>
            <span style="font-size: 16px; opacity: 0.8">Name: </span>
            <span style="font-size: 24px;">${starInfo.name}</span>
        </div>
        <div>
            <span style="font-size: 16px; opacity: 0.8">Surface Temperature:</span>
            <span style="font-size: 24px;">${starInfo.surfaceTemperature}</span>
            <span style="font-size: 16px; opacity: 0.8"> K</span>
        </div>
        <div>
            <span style="font-size: 16px; opacity: 0.8">Solar Radii:</span>
            <span style="font-size: 24px;">${starInfo.radius}</span>
            <span style="font-size: 16px; opacity: 0.8"> R&#x2299;</span>
        </div>
    `;
}
