
import React from 'react'
import PropTypes from 'prop-types';
import { TabItem } from './TabItem'

/**
 * Tabbar Component. Wraps the children component into a list (ul).
 * Items should implement the id and selected property
 * The tabbar component will automatically inject the select prop on the children
 * @param {*} children. The tabbar item to render
 * @param {*} selectedId. The current selected item id
 */
export const TabBar = ({ children, selectedId, handleSelectedChange }) => {

    const handleClick = (e, newSelectedId) => {
        console.log(e);
        console.log(selectedId);

        if(newSelectedId !== selectedId) {
            handleSelectedChange(newSelectedId);
        }
    }

    const childrenWithProps = React.Children.map(children,
        (child) => (
            <li className="tab" key={child.props.id} onClick={(e) => handleClick(e, child.props.id)}>
                {
                    React.cloneElement(child,
                        {
                            selected: child.props.id == selectedId
                        }
                    )
                }
            </li>
        ));

    return (
        <ul class="tabs">
            {
                childrenWithProps
            }
        </ul>
    );


}



TabItem.propTypes = {
    /**
     * A array of tabbar item to render.
     * Items should implement the id and selected property
     */
    children: PropTypes.array.isRequired,
    /**
     * The current selected tabbar item id
     */
    selectedId: PropTypes.string.isRequired,
    /**
     * Function called when the tabbar changes
     */
    handleSelectedChange: PropTypes.func.isRequired
}