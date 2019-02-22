import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeName } from './transformerActions'

const nameFilter = props => {


        const { name, changeName} = props

        return (
            <input 
            id='transformerName' 
            className='form-control' 
            placeholder='Filter by name' 
            value={name} 
            onChange={changeName}></input>
        )
}





const mapStateToProps = state => ({ name: state.transformer.name })
const mapDispatchToProps = dispatch => bindActionCreators({ changeName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(nameFilter)