import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAll } from '../transformersList/transformerActions'

class Model extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    renderModel() {

        const { tempList } = this.props
        const type = tempList.vehicleType || []

        const { list } = this.props
        const vehicle = list.vehicleTypes || []

        let hist = []
            vehicle.map(function (original) {

                if (!hist.includes(original.model) && original.type == type) {
                hist.push(original.model)
            }
            })
            return hist.map((vehicle, i) => <option value={hist[i]} key={i}>{hist[i]}</option>)
        
    }


    handleChange(e) {
        const { tempListAll } = this.props
        tempListAll(e.target.value, 'vehicleModel')
    }

    render() {
        const { tempList } = this.props
        const selected = tempList.vehicleModel || []


        return (
            <select value={selected} id="model" onChange={this.handleChange}>
                <option key="-1" value="">Select Model</option>
                {this.renderModel()}
            </select>
        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList, list: state.transformer.list  })
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAll }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Model)