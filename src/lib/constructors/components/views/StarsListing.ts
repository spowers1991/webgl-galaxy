import Scene from '@/lib/constructors/scenes/Scene'; 
import Camera from '../../cameras/Camera';
import Star from '../../gameObjects/prefabs/stars/Star';
import StarsListingItem from './StarsListingItem';
import { html } from '@/utils/html';

export default function StarsListing(stars: Star[], camera: Camera, scene: Scene) {
    return html`
        <div class="stars-listing" style="display: flex; flex-wrap: wrap; align-items: center;  gap: 5px;">
            ${stars.map((star, index) => 
                StarsListingItem(star, index, camera, scene)
            ).join('')}
        </div>
    `;
}
