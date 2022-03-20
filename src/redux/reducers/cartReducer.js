let defaultState = {
    selectedItems: { items: [], restaurentName: '' }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_To_CART': {
            let newState = { ...state } // Take Every thing in the state, 
            if (action.payload.checkboxValue) {
                // console.log("Add To cart")
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload], /// Take all the selected items + the new one.
                    restaurentName: action.payload.restaurentName /// take the name of the restaurent.
                }
            } else {
                // console.log("Remove from Cart")
                // inside newState.SelectedItems, items (array) : take all the items in items:[array]
                // filter (Remove the item by name) it name, which is not present in the action.paload.title
                // This will search all the items array and return only the (action.payload.title) named items.
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title)
                    ],
                    restaurentName: action.payload.restaurentName,
                }
            }
            // console.log(newState)
            return newState
        }
        default:
            return state;
    }
}

export default cartReducer