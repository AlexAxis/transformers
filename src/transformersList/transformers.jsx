import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetch, changeName } from './transformerActions'

import List from './list'
import RadioFilter from './RadioFilter'
import NameFilter from './nameFilter'

class Transformers extends Component {
    constructor(props) {
        super(props)
    }


    componentWillMount() {
        this.props.fetch();
        this.props.changeName('');
        }

    render() {
        return (
            <div>
                <List />
                <RadioFilter />
                <NameFilter placeholder='Filter by name'/>
            </div>
        )
    }


}

const mapStateToProps = state => ({ list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch, changeName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Transformers)
