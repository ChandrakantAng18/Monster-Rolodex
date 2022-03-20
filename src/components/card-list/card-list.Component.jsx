import React from "react";
import "./card.styles.css";
import Card from "../card/card.component";

export default function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id}></Card>;
      })}
    </div>
  );
}

// export default class CardList extends Component {

//   render() {
//     console.log("----------->>>", this.props);
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id}></Card>;
//         })}
//       </div>
//     );
//   }
// }
