import React, {Component} from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
// import CardList from '../components/CardList';
import './App.css';

//create App componenent that will be the overall app and will contain all the other components

class App extends Component {
      //add state
      constructor() {
          super()
          this.state = {
              results: [],
              people: [],
              planets: [],
              films: [],
              species: [],
              vehicles: [],
              starships: [],
              searchfield: '',
              route: 'selection'
          };
      }

      componentDidMount() {
          fetch('https://swapi.co/api/people')
          .then(response => response.json())
          .then(data => this.setState({results: data.results}));
      }

render() {
    const {results, searchfield, route} = this.state;

    return (
        <div className='tc'>
            <h1 className='f1'>Star Wars API</h1>
            <SearchBar searchChange={this.onSearchChange}/>
        </div>

    ); 

}

}
    



export default App;