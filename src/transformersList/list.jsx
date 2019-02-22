import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetch } from './transformerActions'



import ListItem from './listItem'

const List = props => {

    const renderRows = () => {
        const { fetch, list, faction } = props;
        const list2 = list.transformers || []
        return list2.map(transformers =>  {
            if (transformers.faction ==  faction || faction==  'all'){
                return (<ListItem
                key={transformers.id}
                transformer={transformers.name}
                //navigateToTransformerDetail={fetch}
                id={transformers.id}
            />)}
        })
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Transformers</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )



}



const mapStateToProps = state => ({ list: state.transformer.list, faction: state.transformer.faction })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)