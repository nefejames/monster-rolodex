import React, { Component } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
    searchTerm: "",
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { monsters, searchTerm } = this.state;
    const FilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardContainer monsters={FilteredMonsters} />
      </div>
    );
  }
}

export default App;
