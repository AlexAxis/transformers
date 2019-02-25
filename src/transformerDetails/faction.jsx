import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAll } from '../transformersList/transformerActions'

class Faction extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    renderFaction() {
        const { list } = this.props
        const faction = list.factions || []
        return faction.map(factions => <option key={factions.id} value={factions.id}>{factions.name}</option>)
    }

    handleChange(e) {
        const { tempListAll } = this.props
        //another way...
        // let tempList2 = tempList
        // tempList2.faction = e.target.value
        // tempListAction(tempList2)
        tempListAll(e.target.value, 'faction')
        
    }

    render() {
        const { tempList } = this.props
        const selected = tempList.faction || []
        return (
            <select value={selected} onChange={this.handleChange} id="faction">
                <option key="-1" value="">Select Faction</option>
                {this.renderFaction()}
            </select>
        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ list: state.transformer.list, tempList: state.transformer.tempList })
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAll }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Faction)