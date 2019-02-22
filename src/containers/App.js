import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import SearchBar from '../components/SearchBar';
import PeopleCardList from '../components/People/PeopleCardList';
import './App.css';

//create App componenent that will be the overall app and will contain all the other components

class App extends Component {
      //add state
      constructor() {
          super()
          this.state = {
              object: [],
              searchfield: '',
              route: 'home'
          };
      }

      onNavClick = (param) => {
        fetch(`https://swapi.co/api/${param}`)
          .then(response => response.json())
        //currently hard coded for people array, but need to make dynamic for any navigation button clicked. currently planets also shows same page.
          .then(data => this.setState({object: data.results}));
      }

      onSearchChange = (event) => {
          this.setState({ searchfield: event.target.value });
      }

    //   onRouteChange = (route) => {
    //     this.setState({route: route});
    //   }

render() {
    const { object, searchfield } = this.state;
    const filteredObject = object.filter(object => {
        return object.name.toLowerCase().includes(searchfield.toLowerCase());
    })
        return (
        <div className='tc'>
            <h1 className='f1'>Star Wars API</h1>
            <Navigation onNavClick={this.onNavClick}/>
            <SearchBar searchChange={this.onSearchChange}/>
            <PeopleCardList object={filteredObject} onNavClick={this.onNavClick} />
        </div>
    ); 

}

}
    

export default App;