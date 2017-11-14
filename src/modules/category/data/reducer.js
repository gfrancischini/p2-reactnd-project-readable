const INITIAL_STATE = {
    itemsById: null
}

export const categoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_CATEGORIES":
            const itemsById = action.categories
                .reduce((categories, category) => (Object.assign(categories, { [category.name]: category })), state.itemsById || {});

            return {
                ...state,
                itemsById
            }
        default:
            return state
    }
}

