import React, { useEffect, useState } from 'react';
import { autorun } from 'mobx';
import sceneState from '@/lib/constructors/scenes/SceneState';
import ObjectInfoProperties from './ObjectInfoProperties';

interface ObjectInfoProps {
    property: any; 
}

const ObjectInfo: React.FC<ObjectInfoProps> = ({ property }) => {
    const [activeObject, setActiveObject] = useState<any>(null); 

    useEffect(() => {
        const disposeAutorun = autorun(() => {
            const currentActiveObject = sceneState.getActiveObject();
            setActiveObject(currentActiveObject); 
        });

        return () => disposeAutorun();
    }, []); 

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                position: 'relative',
                background: 'rgba(0,0,0, 0.7)',
                border: '2px solid #ccc',
                overflow: 'hidden',
            }}
        >
            <div className="object-info-container" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeObject ?
                    <ObjectInfoProperties activeObject={activeObject} property={property} />
                :
                    'No active object'
                }
            </div>
        </div>
    );
};

export default ObjectInfo;
