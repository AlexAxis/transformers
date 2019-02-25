import React from 'react'
export default props => {
    if(!props.x) {
        return props.children
    } else {
        return false
    }
}

// class If extends Component {
//     constructor(props) {
//         super(props)
//         this.props = props
//     }
//     render() {
//         return (
//             React.Children.only(this.props.children)
//         )
//     }
// }
// export default If;