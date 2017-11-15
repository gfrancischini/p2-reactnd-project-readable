
import React from 'react';
import { Link } from 'react-router-dom'

export const PostCategorySelection = ({ categories, handleCategoryChange }) => {
    if (categories == null) {
        return <span>No Category</span>
    }

    return (
        <select onChange={(e) => handleCategoryChange(e.target.value)} >
            <option value="">Select a Category</option>
            {
                categories.map((category => {
                    return <option value={category.path}>{category.name}</option>
                }))
            }
        </select>
    )
}