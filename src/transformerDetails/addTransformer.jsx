import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Faction from './faction'
import Status from './status'
import Group from './group'


const addTransformer = props => {

    const renderFaction = () => {
        const { list } = props
        const faction = list.factions || []
        console.log(faction)
        return faction.map(factions => <option key={factions.id} value={factions.id}>{factions.name}</option>)
    }

    const renderVehicle = (value) => {
        const { list } = props
        const vehicle = list.vehicleTypes || []
        const vehicle2 = list || []

        let hist = []
        // console.log('---Hist-->'+hist)
        if (value == 0) {
            vehicle.map(function (a) {
                if (!hist.includes(a.group)) {
                    hist.push(a.group)
                }
            })
            return hist.map((vehicle, i) => <option key={i}>{hist[i]}</option>)
        }

        if (value == 1) {
            return vehicle.map((vehicle, i) => <option key={i}>{vehicle.type}</option>)
        }

        if (value == 2) {
            return vehicle.map((vehicle, i) => <option key={i}>{vehicle.model}</option>)
        }
        console.log(vehicle)
        return vehicle.map(vehicle => <option key={value}>{vehicle.group}</option>)

    }




    return (
        <div>
            <Faction />
            <Status />
            <Group />



           {/* <select id="type">
                <option key="-1" value="Select Type">Select Type</option>
                {renderVehicle(1)}
            </select>
            <select id="model">
                <option key="-1" value="Select Model">Select Model</option>
                {renderVehicle(2)}
    </select>*/}
        </div>
    )
}


const mapStateToProps = state => ({ list: state.transformer.list })
//const mapDispatchToProps = dispatch => bindActionCreators({ changeName }, dispatch)
export default connect(mapStateToProps)(addTransformer)