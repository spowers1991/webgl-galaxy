interface Item {
    [key: string]: any;
}

export default class Filters {
    itemsToFilter: Item[];
    filteredItems: Item[];
    propertyToInclude: string;  

    constructor(itemsToFilter: Item[], propertyToInclude: string) {
        this.itemsToFilter = itemsToFilter;
        this.filteredItems = [...itemsToFilter]; 
        this.propertyToInclude = propertyToInclude; 
    }

    updateFilter(selectedOptions: Item[]) {
        this.filteredItems = this.itemsToFilter.filter(item => {
            return selectedOptions.every(option => {
                const key = Object.keys(option)[0]; 
                const value = option[key]; 

                if (value === '') {
                    return true; 
                }

                const matches = String(item[this.propertyToInclude][key]) === value;
                return matches;
            });
        });
        
        console.log('Filtered Items:', this.filteredItems);
    }

    getFilteredItems() {
        return this.filteredItems;
    }
}
