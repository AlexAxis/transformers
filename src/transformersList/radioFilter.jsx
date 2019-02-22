import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ListItem from './listItem'
import { changeFaction } from './transformerActions'

const RadioFilter = props => {

    const { changeFaction } = props;
    return (
        <div>
            <input type="radio" name="faction" onClick={() => changeFaction('0')} /> Autobots
            <input type="radio" name="faction" onClick={() => changeFaction('1')} /> Decepticons
            <input type="radio" name="faction" onClick={() => changeFaction('all')} /> All
        </div>
    )
}




const mapStateToProps = state => ({ list: state.transformer.list, faction: state.transformer.faction })
const mapDispatchToProps = dispatch => bindActionCreators({ changeFaction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RadioFilter)