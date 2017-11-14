import React from 'react'
import PropTypes from 'prop-types';

import { PostList } from './PostList'
import { PostFilter } from './PostFilter'

/**
 * 
 */
export const PostListFilter = ({ posts, selectedFilterId, handleFilterChange }) => {
    
    

    return (
        <div className="tabs-warp question-tab">
            <PostFilter selectedId={selectedFilterId} handleSelectedChange={handleFilterChange} />
            <div className="tab-inner-warp">
                <div className="tab-inner">
                <PostList posts={posts} />
                </div>
            </div>
        </div>
    )
}