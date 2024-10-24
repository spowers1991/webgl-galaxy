import { html } from '@/utils/html';

interface FilterProperty {
    key: string;
    values: string[];
}
interface FilterSelectProps {
    propertiesToFilter: FilterProperty[];
    handleFilterChange: (event: Event) => void;
}

export default function FilterSelect({ propertiesToFilter, handleFilterChange }: FilterSelectProps) {
    const selectElements = propertiesToFilter.map(property =>
        html`
            <select data-property="${property.key}" class="filter-select" style="padding: 5px;">
                <option value="">Select ${property.key}</option>
                ${property.values.map(value =>
                    html`<option value="${value}">${value}</option>`
                ).join('')} 
            </select>
        `
    ).join(''); 

    const attachEventListeners = () => {
        const selects = document.querySelectorAll('.filter-select');
        selects.forEach(select => {
            select.addEventListener('change', handleFilterChange);
        });
    };

    setTimeout(attachEventListeners, 0);

    return html`
        <div class="container" style="display: flex; gap: 10px;">
            ${selectElements}
        </div>
    `;
}
