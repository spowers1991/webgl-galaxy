// ActiveObjectInfo.ts
import { autorun } from 'mobx';
import sceneState from '@/lib/constructors/scenes/SceneState';
import { html } from '@/utils/html';
import ObjectInfoProperties from './ObjectInfoProperties';

export default function ObjectInfo(property: string) {
    setTimeout(() => {
        const objectInfoContainer = document.querySelector('.object_info_container');

        if (objectInfoContainer) {
            autorun(() => {
                const activeObject = sceneState.getActiveObject();
                objectInfoContainer.innerHTML = ObjectInfoProperties(activeObject, property);
            });
        }
    }, 0);

    return html`
        <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px; position: relative; background: rgba(0,0,0, 0.7); border: 2px solid #ccc; overflow: hidden;">
            <div class="object_info_container" style="display: flex; flex-direction: column; gap: 10px;">
                Loading...
            </div>
        </div>
    `;
}
