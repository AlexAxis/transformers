import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAll } from '../transformersList/transformerActions'

class Type extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    renderType() {
        const { tempList } = this.props
        const group = tempList.vehicleGroup || []
        
        const { list } = this.props
        const vehicle = list.vehicleTypes || []

        let hist = []
        vehicle.map(function (original) {

            if (!hist.includes(original.type) && original.group == group) {
                hist.push(original.type)
            }
        })
        return hist.map((vehicle, i) => <option value={hist[i]} key={i}>{hist[i]}</option>)

    }


    handleChange(e) {
        const { tempListAll } = this.props
        tempListAll(e.target.value, 'vehicleType')
        tempListAll('', 'vehicleModel')
    }

    render() {
        const { tempList } = this.props
        const selected = tempList.vehicleType || []


        return (
            <select value={selected} id="type" onChange={this.handleChange}>
                <option key="-1" value="">Select Type</option>
                {this.renderType()}
            </select>
        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList, list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAll }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Type)