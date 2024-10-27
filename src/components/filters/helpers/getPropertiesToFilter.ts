export function getPropertiesToFilter(items: any[], propertyToInclude: string) {

    const uniqueTypes = [...new Set(items.map(item => item?.[propertyToInclude].type))];
    const uniqueRadius = [...new Set(items.map(item => String(item?.[propertyToInclude].radius)))];
    const uniqueSurfaceTemperature = [...new Set(items.map(item => String(item?.[propertyToInclude].surfaceTemperature)))];

    return [
        { key: 'type', values: uniqueTypes },
        { key: 'radius', values: uniqueRadius, affix: 'R&#x2299;'},
        { key: 'surfaceTemperature', values: uniqueSurfaceTemperature, affix: 'K' }
    ];
}
