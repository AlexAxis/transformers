import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAction } from '../transformersList/transformerActions'

class Status extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { tempListAction, tempList } = this.props
        let tempList2 = tempList
        tempList2.status = e.target.value
        tempListAction(tempList2)
    }

    render() {
        return (
            <select onChange={this.handleChange} id="status">
            <option key="-1" value="">Select Status</option>
                <option key="0" value="OK">OK</option>
                <option key="1" value="INJURED">INJURED</option>
                <option key="2" value="MIA">MIA</option>
            </select>
        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList })
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAction }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Status)