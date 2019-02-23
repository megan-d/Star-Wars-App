import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import SearchBar from '../components/SearchBar';
import PeopleCardList from '../components/People/PeopleCardList';
import PlanetsCardList from '../components/Planets/PlanetsCardList';
import VehiclesCardList from '../components/Vehicles/VehiclesCardList';
import StarshipsCardList from '../components/Starships/StarshipsCardList';
import './App.css';

//create App componenent that will be the overall app and will contain all the other components

class App extends Component {
      //add state
      constructor() {
          super()
          this.state = {
              object: [],
              searchfield: '',
              route: ''
            //   isLoading: true
          };
      }

      getData = (param) => {
        fetch(`https://swapi.co/api/${param}`)  
        .then(response => response.json())
        //currently hard coded for people array, but need to make dynamic for any navigation button clicked. currently planets also shows same page.
        .then(data => this.setState({object: data.results, route: param}));
      }

      componentDidMount =() => {
          this.setState({ object: []});
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

    // if (object.length === 0 && this.route !== '') {
    //     return <h1>Loading...</h1>

    // } else {
        return (
            <div className='tc'>
                <h1 className='f1'>Star Wars API</h1>
                <Navigation onNavClick={this.onNavClick} getData={this.getData}/>
                <SearchBar searchChange={this.onSearchChange}/>
    
                {/* If the route is people, display PeopleCardList. If the route is planets, display PlanetsCardList, etc. */}
                
                { this.state.route === 'people' ? 
                <PeopleCardList object={filteredObject} getData={this.getData} />
                : 
                this.state.route === 'planets' ?
                <PlanetsCardList object={filteredObject} getData={this.getData} />
                : 
                this.state.route === 'vehicles' ?
                <VehiclesCardList object={filteredObject} getData={this.getData} />
                : 
                <StarshipsCardList object={filteredObject} getData={this.getData} />
                }
            </div>
        ); 
    }
    
    }
        



    

export default App;