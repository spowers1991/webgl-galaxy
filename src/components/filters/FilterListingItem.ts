import { autorun } from 'mobx'; 
import Scene from '@/lib/constructors/scenes/Scene'; 
import sceneState from '@/lib/constructors/scenes/SceneState'; 
import Camera from '@/lib/constructors/cameras/Camera';
import Star from '@//lib/constructors/gameObjects/prefabs/stars/Star';
import { html } from '@/utils/html';
import { focusOnObject } from '@/lib/constructors/ui/actions/focusOnObject';

export default function FilterListingItem(item: Star, index: number, camera: Camera, scene: Scene) {

    const starHtml = html`
        <div id="item-${index || '0'}" style="cursor: pointer; padding: 15px; border: 1px solid #fff;">
            <div style="display: flex; flex-direction: column; gap: 10px; height: 100%;">
                <div>
                    ${item.starConfig.generatedName}
                </div>
                <div style="display: flex; font-size: 13px; width: 100%; margin-top: auto;">
                     <div>
                        <span style="opacity: 80%;">Type:</span> ${item?.starConfig.type || 'N/A'}
                    </div>
                    <div style="margin-left: auto;">
                        <span style="opacity: 80%;">R&#x2299;:</span> ${item?.starConfig.radius || 'N/A'}
                    </div>
                </div>
            </div>
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
