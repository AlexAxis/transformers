import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from './transformerActions'

import List from './list'

class Transformers extends Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
        this.props.search()
    }

    render() {
        return (
            <div>
                <List />
            </div>
        )
    }


}

const mapStateToProps = state => ({ list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Transformers)
