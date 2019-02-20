import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetch } from './transformerActions'

const List = props =>{

    const renderRows = () => {
        const { fetch, list } = props;
        const list2 = list.transformers || []
        return list2.map(transformers => (
            <tr key={transformers.id}>
                <td>
                    {transformers.name}
                </td>

                <td>
                    {transformers.id}
                </td>
            </tr>
        ))
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


const mapStateToProps = state => ({ list: state.transformer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ fetch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)