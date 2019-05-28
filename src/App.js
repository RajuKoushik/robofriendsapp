import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from "./robots";
import CardList from "./CardList";

import SearchBox from './SearchBox'

import {setSearchField} from "./actions";

import {connect} from 'react-redux';

const mapStateToProps = state => {
    console.log('mapStateToProps')

    return {
        searchField: state.searchField
    }

}


const mapDispatchToProps = (dispatch) => {

    console.log('mapDispatchToPropsx')
    return {


        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {
            this.setState({robots: users})
        });
    }




    render() {


        const a = this.state.robots;

        console.log(this.state);

        console.log("bla");
        console.log(a);


        const {searchField, onSearchChange} = this.props;

        console.log('props down baby')
        console.log(this.props);

        console.log('onSearchChange:')
        console.log(onSearchChange)

        console.log('searchField');
        console.log(searchField);

        // const filteredRobots = a.filter(robot => {
        //     return robot.name.toLowerCase().includes(searchField.toLowerCase())
        // })

        const ans = a.filter(l => {
            return l.name.toLowerCase().match(searchField.toLowerCase());
        });

        // const filetred = a.filter(function (i, n) {
        //     return n.name === event.target.value;
        // });
        //
        console.log(ans)


        return (
            <div className={'tc'}>
                <h1>Robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <CardList robots={ans}/>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
