const INITIAL_STATE = {
    itemsById: null
}

export const category = (state = INITIAL_STATE, action) => {
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


export const getCategories = (state) => {
    //when there is no loaded post we should try to load the specific one
    if (state.category.itemsById == null) {
        return null;
    }

    const categories = Object.values(state.category.itemsById);

    return categories;
}