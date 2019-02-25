import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeGear } from '../../transformersList/transformerActions'

class GearList extends Component {

    constructor(props) {
        super(props)
       // this.renderRows=this.renderRows.bind(this)
    }


    renderRows() {
        
        const { tempList, removeGear } = this.props
        const gear = tempList.gear || []

        return gear.map( (gears, i) => (
            <tr id={i} key={i} >
                <td>{gears}</td>
                <td>
                    <button
                        onClick={() => removeGear(i)}><i className={'fa fa-trash-o'}></i></button>
                </td>
            </tr>
        ))


    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Weapons</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>

        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList })
const mapDispatchToProps = dispatch => bindActionCreators({ removeGear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GearList)