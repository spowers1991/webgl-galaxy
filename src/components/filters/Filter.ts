import Scene from '@/lib/constructors/scenes/Scene';
import Camera from '@/lib/constructors/cameras/Camera';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import { html } from '@/utils/html';
import Filters from '@/lib/constructors/filters/Filters';
import FilterSelect from './selectors/FilterSelect';
import { getPropertiesToFilter } from './helpers/getPropertiesToFilter';
import { FilteredListings } from './FilterListing';
import { getResultsCount } from './helpers/getResultsCount';

export default function Filter(items: Star[], camera: Camera, scene: Scene) {

    const propertiesToFilter = getPropertiesToFilter(items, 'starConfig');

    const selectedOptions = propertiesToFilter.map(property => ({ [property.key]: '' }));

    const filters = new Filters(items, 'starConfig');

    const handleFilterChange = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        const value = target.value;
        const property = target.dataset.property;

        const index = selectedOptions.findIndex(option => option[property] !== undefined);
        if (index !== -1) {
            selectedOptions[index][property] = value;
            filters.updateFilter(selectedOptions);

            // Re-render the stars after filtering
            getResultsCount(filters, selectedOptions);
            
            FilteredListings(filters, camera, scene);
        }
    };

    setTimeout(() => FilteredListings(filters, camera, scene), 0);

    return html`
        <div class="filtered-listing" style="display: flex; flex-direction: column; gap: 10px; padding: 20px; max-height: 400px; position: relative;">
        
            <div class="filters" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 10px; padding-bottom: 10px;">
                ${FilterSelect({ propertiesToFilter, handleFilterChange })}
            </div>
            <div class="items-count" style="display: flex; flex-direction: column; gap: 5px;">
                
            </div>
            <div class="container filtered-container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; overflow-y:scroll">
                <!-- Stars will be rendered here based on filter -->
            </div>

        </div>
    `;
}
