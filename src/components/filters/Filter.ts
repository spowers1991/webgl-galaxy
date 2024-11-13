import Scene from '@/lib/constructors/scenes/Scene';
import Camera from '@/lib/constructors/cameras/Camera';
import Star from '@/lib/constructors/gameObjects/prefabs/stars/Star';
import { html } from '@/utils/html';
import Filters from '@/lib/constructors/filters/Filters';
import FilterSelect from './selectors/FilterSelect';
import { getPropertiesToFilter } from './helpers/getPropertiesToFilter';
import { FilteredListings } from './FilteredListings';
import { CurrentFilterInfo } from './CurrentFilterInfo';

export default function Filter(items: Star[], camera: Camera, scene: Scene) {

    const filters = new Filters(items, 'starConfig');
    const propertiesToFilter = getPropertiesToFilter(items, 'starConfig');
    const selectedOptions = propertiesToFilter.map(property => ({ [property.key]: '' }));

    const renderHTML = () => {
        return html`
            <div class="filtered-listing" style="display: flex; flex-direction: column; gap: 20px; padding: 20px; max-height: 400px; position: relative; background: rgba(0,0,0, 0.7); border: 2px solid #ccc; overflow: hidden;">
            
                <div class="filters" style="display: grid; grid-template-columns: repeat(1, 1fr); gap: 10px;">
                    ${FilterSelect({ propertiesToFilter, handleFilterChange })}
                </div>
                <div class="items-count" style="display: flex; flex-direction: column; gap: 5px;">
                    ${CurrentFilterInfo(filters, propertiesToFilter, selectedOptions)} 
                </div>
                <div class="container filtered-container" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; overflow-y:scroll">
                    ${FilteredListings(filters, camera, scene)}
                </div>

            </div>
        `;
    };

    const handleFilterChange = (event: Event) => {
        const target = event.target as HTMLSelectElement;
        const value = target.value;
        const property = target.dataset.property;

        const index = selectedOptions.findIndex(option => option[property] !== undefined);
        if (index !== -1) {
            selectedOptions[index][property] = value;
            filters.updateFilter(selectedOptions);
            
            renderHTML();
        }
    };

    setTimeout(() => {
        renderHTML(); 
    }, 0);

    return renderHTML();
}
