import React, { Component } from "react";
import "./card.styles.css";
export default class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <h4>{`Email: ${email}`}</h4>
        {/* <h5>{`Work at: ${monster.company.catchPhrase}`}</h5> */}
      </div>
    );
  }
}
