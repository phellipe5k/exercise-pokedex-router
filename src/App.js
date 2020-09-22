import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import Header from './Header';
import Favorites from './Favorites';
import PokemonDetails from './PokemonDetails';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
        <Header />
          <Switch>
            <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} data={pokemons} />}/>
            <Route path="/about" component={About}/>
            <Route path="/favorites" component={Favorites}/>
            <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons} />}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;