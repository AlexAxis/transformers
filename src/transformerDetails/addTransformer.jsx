import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Faction from './faction'
import Status from './status'
import Name from './name'
import Gear from './gear/gear'
import Group from './group'
import Type from './type'
import Model from './model'
import axios from 'axios'
import { insertTransformer, tempListAll, updateTransformer, deleteTransformer } from '../transformersList/transformerActions'
import { withRouter } from 'react-router';
import If from '../template/if'


class AddTransformer extends Component {

    constructor(props) {
        super(props)
        this.post = this.post.bind(this)
    }



    post() {
        const { tempList, list, insertTransformer, tempListAll } = this.props;
        if (tempList.name !== '' && tempList.faction !== '' && tempList.vehicleGroup !== '' && tempList.vehicleType !== '' && tempList.vehicleModel !== '' && tempList.status !== '') {
            let x = 0
            x = list.transformers[list.transformers.length - 1].id
            x++
            insertTransformer(tempList, x)

            tempListAll('', 'id')
            tempListAll('', 'name')
            tempListAll('', 'faction')
            tempListAll('', 'vehicleGroup')
            tempListAll('', 'vehicleType')
            tempListAll('', 'vehicleModel')
            tempListAll('', 'status')
            this.props.router.push(`/transformersList`)


        } else {
            alert('Values are missing...')
        }
    }

    put() {
        const { tempList, list, insertTransformer, tempListAll, idTransformer } = this.props;
        if (tempList.name !== '' && tempList.faction !== '' && tempList.vehicleGroup !== '' && tempList.vehicleType !== '' && tempList.vehicleModel !== '' && tempList.status !== '') {
            const x = idTransformer
            insertTransformer(tempList, x)

            tempListAll('', 'id')
            tempListAll('', 'name')
            tempListAll('', 'faction')
            tempListAll('', 'vehicleGroup')
            tempListAll('', 'vehicleType')
            tempListAll('', 'vehicleModel')
            tempListAll('', 'status')
            this.props.router.push(`/transformersList`)


        } else {
            alert('Values are missing...')
        }
    }


    render() {
        const { idTransformer } = this.props;

        return (
            <div>
                <If x={idTransformer} >
                    <Name />
                </If>
                <If x={idTransformer} >
                    <Faction />
                </If>
                <Status />
                <If x={idTransformer} >
                    <Group />
                </If>
                <If x={idTransformer} >
                    <Type />
                </If>
                <If x={idTransformer} >
                    <Model />
                </If>
                <Gear />
                <button>edit</button>
                <button onClick={() => this.post()}>add</button>
                <button>remove</button>
            </div>
        )

    }
}

const mapStateToProps = state => ({ tempList: state.transformer.tempList, list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ insertTransformer, tempListAll, updateTransformer, deleteTransformer }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddTransformer))
