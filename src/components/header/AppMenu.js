
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {Menu,MenuItem} from '../menu'

export const AppMenu = ({categories}) => (
    
            <Menu>
                <MenuItem title="Home" to="/" />
                <MenuItem title="Create a Post" to="/post/new" />
                <MenuItem title="Categories" to="/" >
                {
                    categories?categories.map((category) => {
                        return <MenuItem title={category.name} to={`/?category=${category.path}`} />
                    }):null
                }
                </MenuItem>
                <MenuItem title="About" to="/post/new" />
            </Menu>


)
