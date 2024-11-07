import Filters from "@/lib/constructors/filters/Filters";

export function CurrentFilterInfo(filters: Filters, propertiesToFilter: any[], selectedOptions: any[]) {
    const itemsToFilter = filters.getFilteredItems();
    const itemsCountContainter = document.querySelector('.items-count');
    
    let selectedOptionsInfo = '';

    const affixes = propertiesToFilter.map(property => ( [property.affix] ));

    let index = 0;
    for (let option of selectedOptions) {
        index++;
        for (let key in option) {
            if (option.hasOwnProperty(key) && option[key] !=='') {
                selectedOptionsInfo +=
                `
                <div style="display: flex; flex-direction: column; gap: 5px; text-transform: capitalize;">
                    <div>
                        <span style="opacity: 0.8">
                            ${key}:
                        </span> ${option[key].toLowerCase()} 
                        <span style="font-size: 14px; opacity: 0.8">
                            ${affixes && affixes[index - 1].toString()}
                        </span>
                    </div>
                <div>
                `;
            }
        }
    }
    if( itemsCountContainter ) {
        itemsCountContainter.innerHTML = 
        `
        <div style="font-size: 24px;">
                ${itemsToFilter.length} 
            <span style="font-size: 14px; opacity: 0.8">
            results
            </span>
        </div>
        `
        +selectedOptionsInfo+``;
    }
}
