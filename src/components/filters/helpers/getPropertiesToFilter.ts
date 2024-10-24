export function getPropertiesToFilter(items: any[], propertyToInclude: string) {

    const uniqueTypes = [...new Set(items.map(item => item.starConfig.type))];
    const uniqueDiameters = [...new Set(items.map(item => String(item?.[propertyToInclude].diameter)))];

    return [
        { key: 'type', values: uniqueTypes },
        { key: 'diameter', values: uniqueDiameters }
    ];
}
