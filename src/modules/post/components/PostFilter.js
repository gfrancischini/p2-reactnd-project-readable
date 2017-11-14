import React from 'react'
import PropTypes from 'prop-types';

import { postFilterTabBarItems } from '../utils/constants'
import components from '../../shared/tabBar'

const {TabBar, TabItem} = components.components

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