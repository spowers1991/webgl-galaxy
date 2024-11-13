import { autorun } from 'mobx';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { html } from '@/utils/html';
import ObjectInfoProperties from './ObjectInfoProperties';

export default function ObjectInfo(property: string) {

    const renderHTML = () => {
        return html`
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; position: relative; background: rgba(0,0,0, 0.7); border: 2px solid #ccc; overflow: hidden;">
                <div class="object-info-container" style="display: flex; flex-direction: column; gap: 10px;">
                    No star selected.
                </div>
            </div>
        `;
    }

    setTimeout(() => {
        autorun(() => {
            const activeObject = sceneState.getActiveObject();
            if( activeObject ){
                document.querySelector('.object-info-container').innerHTML = ObjectInfoProperties(activeObject, property);
            }
        })
        renderHTML(); 
    }, 0);

    return renderHTML();

}