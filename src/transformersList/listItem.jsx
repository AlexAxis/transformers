import React, { Component } from 'react';
import { TouchableOpacity } from 'react';
import { Link } from 'react-router-dom';


const ListItem = props => {

    const { transformer, id } = props;
    return (
        <tr onClick={() => <li><Link to={`/transformerDetails/${id} `}>algo</Link></li>}>
                <td>{transformer}</td>
                <td>{id}</td>
        </tr>
    );
}
export default ListItem;