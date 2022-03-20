import React from "react";
import "./search-box.style.css";
// export default class SearchBox extends Component {
//   render() {
//     // console.log(this.props.onChange)
//     return (
//       <div>
//         <input
//           type="search"
//           className={`search-box ${this.props.className}`}
//           placeholder={this.props.placeholder}
//           onChange={this.props.onChange}
//         />
//       </div>
//     );
//   }
// }

export default function SearchBox(props) {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${props.className}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
