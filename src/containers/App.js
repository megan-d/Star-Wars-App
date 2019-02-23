import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
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
        .then(data => this.setState({object: data.results, route: param}))
        .catch(error => console.log(error));
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
                <p id='subtitle'>Select a category below to learn more...</p>
                <Navigation getData={this.getData}/>
                <SearchBar searchChange={this.onSearchChange}/>
    
                {/* If the route is people, display PeopleCardList. If the route is planets, display PlanetsCardList, etc. */}
                
                { this.state.route === 'people' ? 
                <Scroll>
                    <PeopleCardList object={filteredObject} getData={this.getData} />
                </Scroll>
                : 
                this.state.route === 'planets' ?
                <Scroll>
                    <PlanetsCardList object={filteredObject} getData={this.getData} />
                </Scroll>
                
                : 
                this.state.route === 'vehicles' ?
                <Scroll>
                    <VehiclesCardList object={filteredObject} getData={this.getData} />
                </Scroll>
                : 
                <Scroll>
                    <StarshipsCardList object={filteredObject} getData={this.getData} />
                </Scroll>
                
                }
            </div>
        ); 
    }
    
    }
        



    

export default App;