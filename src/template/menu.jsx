import React from 'react';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/transformersList">Your Transformers List</a></li>
                    <li><a href="#/transformerDetails">Transformer's Details</a></li>
                </ul>
            </div>
        </div>
    </nav>
)