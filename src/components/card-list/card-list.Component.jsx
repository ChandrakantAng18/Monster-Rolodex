import React, { Component } from "react";
import "./card.styles.css";
import Card from "../card/card.component";

export default class CardList extends Component {
  // constructor(props) {
  //   super(props);

  //   console.log("this is a prop" + this.props);
  // }
  render() {
    console.log("----------->>>", this.props);
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} key={monster.id}></Card>;
        })}
      </div>
    );
  }
}
