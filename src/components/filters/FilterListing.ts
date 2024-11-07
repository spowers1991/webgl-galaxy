import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import Filters from '@/lib/constructors/filters/Filters';
import FilterListingItem from './FilterListingItem';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';

export function FilteredListing( filters: Filters, camera: Camera, scene: Scene ) {
    if( filters ){
        const filteredItems = filters.getFilteredItems();
        const filtersContainer = document.querySelector('.filtered-container');
        if (filtersContainer) {
            filtersContainer.innerHTML = filteredItems.map((item, index) =>
                FilterListingItem(item as Star, index, camera, scene)
            ).join('');
        }
    }
}
