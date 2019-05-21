import React from 'react'
import Card from "./Card";
import {robots} from "./robots";


const CardList = ({robots}) => {

    const cardComponent = robots.map((user,i) =>
    {
        return (<Card name={robots[i].name} id={robots[i].id} email={robots[i].email}/>);
    }
)


    return (<div>
        {cardComponent}

    </div>);
}

export default CardList;