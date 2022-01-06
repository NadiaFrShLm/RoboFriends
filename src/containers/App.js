import React, { Component } from "react";
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    //загрузили robots 
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state; //distructuring 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        // используя turnary operator
        return !robots.length // если ARRAY  с роботами не загрузился, длинна не существует
            ?
            < h1 > Loading ...</h1 > //то строка ЗВГРУЖАЕТСЯ...
            :   //иначе
            (<div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <hr />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>);
    }
}


export default App;