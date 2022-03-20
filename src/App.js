import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.Component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";

export default function App() {
  console.log("render");
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    console.log("first Effect Fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    console.log("Second Effect Fired");
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    console.log("NewMon", newFilteredMonsters);
  }, [monsters, searchField]);

  const onChangeHandler = (event) => {
    const searchString = event.target.value;
    return setSearchField(searchString);
  };
  console.log("SearchField", searchField);
  console.log("--filtered Monsters:->", filteredMonsters);
  return (
    <div>
      <h1 className="app-title">Monster Rolodex</h1>
      {/* <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onChangeHandler}
      /> */}
      <SearchBox
        placeholder={"Search Monsters"}
        onChange={onChangeHandler}
        className={"search-box"}
      ></SearchBox>
      <CardList monsters={filteredMonsters} />
      {/* {filteredMonsters.map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
            <h2>{monster.email}</h2>
          </div>
        );
      })} */}
    </div>
  );
}

// export default function App() {
//   const [searchField, setSearchField] = useState("");
//   const [monsters, setMonsters] = useState([]);
//   const [filteredMonsters, setFilterMonsters] = useState([]);
//   console.log("render");
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => setMonsters(users));
//   }, []);
//   const newFilteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLowerCase().includes(searchField);
//   });

//   const onSearchChange = (event) => {
//     const searchFieldString = event.target.value.toLowerCase();
//     setSearchField(searchField);
//   };
//   return (
//     <div className="App">
//       <h1 className="app-title">Monster Rolodex</h1>
//       <SearchBox
//         onChangeHandler={onSearchChange}
//         placeholder="Search Monsters"
//         className="monsters-search-box"
//       ></SearchBox>
//       {monsters.map((monster) => {
//         return (
//           <div key={monster.id}>
//             <h1>{monster.name}</h1>
//             <h3> {monster.email} </h3>
//           </div>
//         );
//       })}
//       {/* <CardList monsters={props.filteredMonsters} /> */}
//     </div>
//   );
// }

// export default class App extends Component {
//   constructor(props) {
//     console.log("Constructor");
//     super(props);

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   componentDidMount() {
//     console.log("ComponentDidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     console.log("Render");
//     //object destructuring--
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//           className="monsters-search-box"
//         ></SearchBox>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
