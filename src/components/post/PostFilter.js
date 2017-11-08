import React from 'react'
import { postFilterTabBarItems } from './constants'
import { TabBar, TabItem } from '../tabbar'
import PropTypes from 'prop-types';

/**
 * A TabBar of available post filter
 */
export const PostFilter = ({ selectedId, handleSelectedChange }) => (
    <TabBar selectedId={selectedId} handleSelectedChange={handleSelectedChange}>
        {
            postFilterTabBarItems.map((item) => <TabItem title={item.title} id={item.id} key={item.id} />)
        }
    </TabBar>
)

PostFilter.propTypes = {
    /**
     * The current selected tabbar item id
     */
    selectedId: PropTypes.string.isRequired
}