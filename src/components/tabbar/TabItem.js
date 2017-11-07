
import React from 'react'
import PropTypes from 'prop-types';

/**
 * A TabBar Item Component. Normally Rendered by TabBar Component
 */
export const TabItem = ({ title, id, selected = false }) => {
    const className = selected ? "current" : "";
    return (
        <a className={className}>{title}</a>
    )
}

TabItem.propTypes = {
    /**
     * The tabbar item title
     */
    title: PropTypes.string.isRequired,
    /**
     * The tabbar item id
     */
    id: PropTypes.string.isRequired,
    /**
     * True when the tabbar item is the currently selected item
     */
    selected: PropTypes.bool.isRequired
}