import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import './App.css';

//create App componenent that will be the overall app and will contain all the other components

class App extends Component {
      //add state
      constructor() {
          super()
          this.state = {
              people: [],
              searchfield: ''
          };
      }

      componentDidMount() {
          fetch('https://swapi.co/api/people')
          .then(response => response.json())
          .then(data => this.setState({people: data.results}));
      }

      onSearchChange = (event) => {
          this.setState({ searchfield: event.target.value });
      }

render() {
    const { people, searchfield } = this.state;
    const filteredPeople = people.filter(people => {
        return people.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1 className='f1'>Star Wars API</h1>
            <SearchBar searchChange={this.onSearchChange}/>
            <CardList people={filteredPeople} />
        </div>

    ); 

}

}
    

export default App;