import { autorun } from 'mobx'; 
import Scene from '@/lib/constructors/scenes/Scene'; 
import sceneState from '@/lib/constructors/scenes/SceneState'; 
import Camera from '../../cameras/Camera';
import Star from '../../gameObjects/prefabs/stars/Star';
import { html } from '@/utils/html';
import { focusOnStar } from '../helpers/focusOnStar';

export default function StarsListingItem(star: Star, index: number, camera: Camera, scene: Scene) {

    const starHtml = html`
        <div id="star-${index || '0'}" style="width: fit-content; cursor: pointer; padding: 3px;  border: 1px solid #fff;">
            ${star.name || 'Unnamed Star'}
        </div>
    `;

    autorun(() => {
        const activeObject = sceneState.getActiveObject();
        const activeLink = document.querySelector('#star-'+index) as HTMLElement;  
        if( activeObject ) {
            if (activeObject?.name === star?.name) {
                activeLink.style.color = 'green'; 
            } else {
                activeLink.style.color = ''; 
            }       
        }
    });

    setTimeout(() => {
        const starElement = document.getElementById(`star-${index}`);
        if (starElement) {
            starElement.addEventListener('click', () => focusOnStar(star, camera, scene));
        }
    }, 0);

    return starHtml;
}
