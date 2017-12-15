import React from 'react';

export const PostCategorySelection = ({ categories, currentCategory, handleCategoryChange }) => {
    if (categories == null) {
        return <span>No Category</span>
    }

    return (
        <select onChange={(e) => handleCategoryChange(e.target.value)} >
            <option value="">Select a Category</option>
            {
                categories.map((category => {
                    return <option key={category.name} selected={category.path === currentCategory} value={category.path}>{category.name}</option>
                }))
            }
        </select>
    )
}