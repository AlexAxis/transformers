import React, { Component } from 'react';
import { TouchableOpacity } from 'react';

const ListItem = props => {

    const { transformer, navigateToTransformerDetail, id } = props;
    return (
        <tr onClick={() => console.log(`tocaste em mim!${id}`)}>
                <td>{transformer}</td>
                <td>{id}</td>
        </tr>
    );
}
export default ListItem;