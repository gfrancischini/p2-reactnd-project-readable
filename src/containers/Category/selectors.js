
export const getCategories = (state) => {
    //when there is no loaded post we should try to load the specific one
    if (state.category.itemsById == null) {
        return null;
    }

    const categories = Object.values(state.category.itemsById);

    return categories;
}