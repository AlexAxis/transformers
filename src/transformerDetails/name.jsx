import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { tempListAll } from '../transformersList/transformerActions'

class Name extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { tempListAll } = this.props
        tempListAll(e.target.value, 'name')

    }

    render() {
        const { tempList } = this.props

        return (
            <input 
            id='transformerName' 
            className='form-control' 
            placeholder='Name' 
            value={tempList.name} 
            onChange={this.handleChange}></input>
        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList })
const mapDispatchToProps = dispatch => bindActionCreators({ tempListAll }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Name)