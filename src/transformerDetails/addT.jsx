import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const AddT = props => {
    const x = props.params.id


    return (
    <div>
        <h1>Transformer id nª{x} </h1>
        <select id="group">
            <option value="Select one"></option>
        </select>

    </div>
)
}



const mapStateToProps = state => ({ list: state.transformer.list})
// const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)

//export default connect(mapStateToProps, mapDispatchToProps)(AddT)

export default connect(mapStateToProps)(AddT)

