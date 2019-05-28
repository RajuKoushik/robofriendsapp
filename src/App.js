import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from "./robots";
import CardList from "./CardList";

import SearchBox from './SearchBox'

import {setSearchField, requestRobots} from "./actions";

import {connect} from 'react-redux';

const mapStateToProps = state => {
    console.log('mapStateToProps')

    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }

}


const mapDispatchToProps = (dispatch) => {

    console.log('mapDispatchToPropsx')
    return {


        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {


    componentDidMount() {
        this.props.onRequestRobots();
    }


    render() {


        console.log(this.state);

        console.log("bla");


        const {searchField, onSearchChange, robots, isPending} = this.props;

        console.log('props down baby')
        console.log(this.props);

        console.log('onSearchChange:')
        console.log(onSearchChange)

        console.log('searchField');
        console.log(searchField);

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        // const ans = a.filter(l => {
        //     return l.name.toLowerCase().match(searchField.toLowerCase());
        // });

        // const filetred = a.filter(function (i, n) {
        //     return n.name === event.target.value;
        // });
        //
        console.log(filteredRobots)


        return (
            <div className={'tc'}>
                <h1>Robofriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <CardList robots={filteredRobots}/>

            </div>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
