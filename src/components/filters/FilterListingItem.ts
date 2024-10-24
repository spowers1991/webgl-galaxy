import { autorun } from 'mobx'; 
import Scene from '@/lib/constructors/scenes/Scene'; 
import sceneState from '@/lib/constructors/scenes/SceneState'; 
import Camera from '@/lib/constructors/cameras/Camera';
import Star from '@//lib/constructors/gameObjects/prefabs/stars/Star';
import { html } from '@/utils/html';
import { focusOnObject } from '@/lib/constructors/ui/helpers/focusOnObject';

export default function FilterListingItem(item: Star, index: number, camera: Camera, scene: Scene) {

    const starHtml = html`
        <div id="item-${index || '0'}" style="cursor: pointer; padding: 3px; border: 1px solid #fff; display: flex;">
            ${item?.name || 'Unnamed Star'}
        </div>
    `;

    setTimeout(() => {
        const LinkElement = document.getElementById(`item-${index}`);
        if (LinkElement) {
            LinkElement.addEventListener('click', () => focusOnObject(item, camera, scene));
        }
    }, 0);

    return starHtml;
}
