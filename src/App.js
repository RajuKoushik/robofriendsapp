import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from "./robots";
import CardList from "./CardList";

import SearchBox from './SearchBox'


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }


    onSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({searchfield: event.target.value})
        const a = this.state.robots

        console.log(a)

        const ans = robots.filter(l => {
            return l.name.toLowerCase().match(event.target.value.toString());
        });

        // const filetred = a.filter(function (i, n) {
        //     return n.name === event.target.value;
        // });
        //
        console.log(ans)

        this.setState({robots: ans})

    }

    render() {
        return (
            <div className={'tc'}>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots}/>

            </div>

        );
    }
}

export default App;
