import React from 'react';

interface StarInfo {
    generatedName: string;
    surfaceTemperature: number;
    radius: number;
}

interface ObjectInfoPropertiesProps {
    activeObject: { [key: string]: StarInfo } | null;
    property: string;
}

const ObjectInfoProperties: React.FC<ObjectInfoPropertiesProps> = ({ activeObject, property }) => {
    if (!activeObject || !activeObject[property]) {
        return null;
    }

    const starInfo = activeObject[property];
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
                <span style={{ fontSize: '16px', opacity: 0.8 }}>Name: </span>
                <span style={{ fontSize: '24px' }}>{starInfo.generatedName}</span>
            </div>
            <div>
                <span style={{ fontSize: '16px', opacity: 0.8 }}>Surface Temperature: </span>
                <span style={{ fontSize: '24px' }}>{starInfo.surfaceTemperature}</span>
                <span style={{ fontSize: '16px', opacity: 0.8 }}> K</span>
            </div>
            <div>
                <span style={{ fontSize: '16px', opacity: 0.8 }}>Solar Radii: </span>
                <span style={{ fontSize: '24px' }}>{starInfo.radius}</span>
                <span style={{ fontSize: '16px', opacity: 0.8 }}> R&#x2299;</span>
            </div>
        </div>
    );
};

export default ObjectInfoProperties;
