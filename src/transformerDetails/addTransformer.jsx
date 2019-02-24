import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Faction from './faction'
import Status from './status'
import Name from './name'

import Group from './group'
import Type from './type'
import Model from './model'

const addTransformer = props => {

    return (
        <div>
            <Name />
            <Faction />
            <Status />
            <Group />
            <Type />
            <Model />
        </div>
    )
}

const mapStateToProps = state => ({ list: state.transformer.list })
//const mapDispatchToProps = dispatch => bindActionCreators({ changeName }, dispatch)
export default connect(mapStateToProps)(addTransformer)