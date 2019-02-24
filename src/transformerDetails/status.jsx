import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAll } from '../transformersList/transformerActions'

class Status extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { tempListAll } = this.props
        tempListAll(e.target.value, 'status')

    }

    render() {
        const { tempList } = this.props
        const selected = tempList.status || []
        return (
            <select value={selected} onChange={this.handleChange} id="status">
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
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAll }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Status)