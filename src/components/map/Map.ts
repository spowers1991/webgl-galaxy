import { autorun } from 'mobx';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { html } from '@/utils/html';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';

export default function Map(markers: Star[]) {
    let activeObject = null;

    const renderHTML = (activeObject: Star) => {
        return html`
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; position: relative; background: rgba(0,0,0, 0.7); border: 2px solid #ccc;">
                <div class="map-container" style="display: flex; flex-direction: column; gap: 10px; height: 100px;">
                    ${markers.map((marker, index) => html`
                        <div key=${index} 
                             style="
                                    left: ${marker.mesh.position.x / 4}px; 
                                    top: ${marker.mesh.position.z / 4}px; 
                                    position: absolute; 
                                    width: 2px; 
                                    height: 2px; 
                                    border-radius: 100%;
                                    background: ${activeObject === marker ? 'green' : '#fff'};
                                ">
                                ${activeObject?.name === marker?.name ? console.log('green') : console.log('not green')}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    };

    autorun(() => {
        activeObject = sceneState.getActiveObject();
        renderHTML(activeObject); 
    });

    return renderHTML(activeObject);  
}
