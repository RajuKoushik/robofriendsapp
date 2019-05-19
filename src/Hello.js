import React, {Component} from 'react';

import './Hello.css'


const Hello = (props) => {
    return (
        <div class="fi tc">
            <h1>Hello Mother Fucker</h1>
            <p> Heylo people of the earth where we resideee </p>
            <p>{props.greeting}</p>
        </div>
    );

}

export default Hello;