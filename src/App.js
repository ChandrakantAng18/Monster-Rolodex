import React, { Component } from "react";
// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.Component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("Render");
    //object destructuring--
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="monsters-search-box"
        ></SearchBox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
