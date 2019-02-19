import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { search } from './transformerActions'

const List = props =>{

    const renderRows = () => {
        // const { search, list } = this.props;
        console.log(props.list)
        const list2 = props.list.transformers || []
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
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)