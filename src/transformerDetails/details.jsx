import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetch } from '../transformersList/transformerActions'

import AddTransformer from './addTransformer'


class Details extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.fetch()
    }

    render() {
        const x = this.props.params.id
        return (
            <div>
                <h1>Transformer id nª{x} </h1>
                <AddTransformer />
            </div>
        )
    }
}




const mapStateToProps = state => ({ list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Details)


