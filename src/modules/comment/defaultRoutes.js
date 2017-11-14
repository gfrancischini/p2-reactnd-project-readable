import React from 'react'
import { Route } from 'react-router-dom'
import {CommentAddEditContainer} from './containers'

export const CommentRoutes = () => (
    <div>
        <Route exact path="/comment/:id/edit" component={CommentAddEditContainer} />
    </div>
)

