import React, { Component } from 'react';
import CardList from '../components/CardList'
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  onSearchChange= (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
    })
      return (
        <div className='tc'>
          <h1>ROBOFRIENDS</h1>
          <Searchbox searchchange={this.onSearchChange}/>
          <Scroll>
            <CardList robots= {filteredRobots}/>
          </Scroll>
        </div>
      );
    }
  }

export default App;