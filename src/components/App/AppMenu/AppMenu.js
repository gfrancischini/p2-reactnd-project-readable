import React from 'react';
import { Menu, MenuItem } from 'components/Common/Menu'
import { fakeAuth } from 'containers/Login'

export const AppMenu = ({ categories }) => (
    <Menu>
        <MenuItem title="Home" to="/" />
        <MenuItem title="Create a Post" to="/post/new" />
        <MenuItem title="Categories" to="/" >
            {
                categories ? categories.map((category) => {
                    return <MenuItem key={category.name} title={category.name} to={`/${category.path}`} />
                }) : null
            }
        </MenuItem>

        {
            fakeAuth.user ? <MenuItem title={`Hi, ${fakeAuth.user}`} to="/" /> : <MenuItem title="Login" to="/login" />
        }
    </Menu>
)
