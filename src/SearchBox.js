import React from 'react';
import CardList from "./CardList";
import {robots} from "./robots";

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>

            <input className={'pa3 ba b--green bg-lightest-blue'} placeholder={'search robots'} type={'search'}
                   onChange={searchChange}/>

        </div>

    );
}

export default SearchBox;
