import Camera from '@/lib/constructors/cameras/Camera';
import Scene from '@/lib/constructors/scenes/Scene';
import Filters from '@/lib/constructors/filters/Filters';
import FilteredListingsItem from './FilteredListingsItem';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';

export function FilteredListings( filters: Filters, camera: Camera, scene: Scene ) {
    if( filters ){
        const filteredItems = filters.getFilteredItems();
        const filtersContainer = document.querySelector('.filtered-container');
        if (filtersContainer) {
            filtersContainer.innerHTML = filteredItems.map((item, index) =>
                FilteredListingsItem(item as Star, index, camera, scene)
            ).join('');
        }
    }
}
