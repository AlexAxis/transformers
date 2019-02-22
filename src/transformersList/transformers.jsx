import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetch } from './transformerActions'

import List from './list'
import RadioFilter from './RadioFilter'

class Transformers extends Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
        this.props.fetch()
    }

    render() {
        return (
            <div>
                <List />
                <RadioFilter />
            </div>
        )
    }


}

const mapStateToProps = state => ({ list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Transformers)
