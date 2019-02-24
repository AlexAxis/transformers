import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addGear, changeName } from '../../transformersList/transformerActions'
import Name from '../../transformersList/nameFilter'


class GearAdd extends Component {

    constructor(props) {
        super(props)
        // this.renderRows=this.renderRows.bind(this)
    }



    componentWillMount() {
        this.props.changeName('');
        }

    render() {
        const { addGear, name, changeName } = this.props

        return (
            <div>
                <Name placeholder='Weapon'/>
                <button 
                    onClick={() => {addGear(name); changeName('')}}><i className={'fa fa-plus'}></i></button>
            </div>

        )
    }
}
//Export the decorated class
const mapStateToProps = state => ({ tempList: state.transformer.tempList, name: state.transformer.name  })
const mapDispatchToProps = dispatch => bindActionCreators({ addGear, changeName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(GearAdd)