import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import TransformersList from '../transformersList/transformers'
import TransformerDetails from '../transformerDetails/details'

export default props => (
    <Router history={hashHistory}>
    <Route path='/transformersList' component={TransformersList}/>
    <Route path='/transformerDetails' component={TransformerDetails}/>
    <Redirect from='*' to = '/transformersList'/>
    </Router>
)