import React, { Component } from 'react';
import { TouchableOpacity } from 'react';
import { withRouter } from 'react-router';




class ListItem extends React.Component {

    render() {
        const { transformer, id } = this.props;

        return (
            <tr onClick={() => this.props.router.push(`/transformerDetails/${id}`)}>
                <td>{transformer}</td>
                <td>{id}</td>
            </tr>
        )
    }
};

// Export the decorated class
export default withRouter(ListItem);

//`this.props.router.push('/transformerDetails')`

//<Link to={`/transformerDetails/${id} `}>algo</Link>

// use `this.props.router.push('/some/path')` here
