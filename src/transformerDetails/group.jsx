import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAll } from '../transformersList/transformerActions'

class Group extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    renderGroup() {
        const { list } = this.props
        const vehicle = list.vehicleTypes || []

        let hist = []
        vehicle.map(function (original) {
            if (!hist.includes(original.group)) {
                hist.push(original.group)
            }
        })
        return hist.map((vehicle, i) => <option key={i}>{hist[i]}</option>)

    }


    handleChange(e) {
        const { tempListAll } = this.props
        tempListAll(e.target.value, 'vehicleGroup')
        tempListAll('', 'vehicleType')
        tempListAll('', 'vehicleModel')
    }

    render() {
        const { tempList } = this.props
        const selected = tempList.vehicleGroup || []
        return (
            <select value={selected} id="group" onChange={this.handleChange}>
                <option key="-1" value="">Select Group</option>
                {this.renderGroup()}
            </select>
        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList, list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAll }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Group)