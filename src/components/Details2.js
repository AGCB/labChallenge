import React from 'react';
import './Details2.css';

class Details2 extends React.Component {
  render() {
    return (
      <div className="container">
        <img alt="stockPhoto"
             src={this.props.url}/>
        <div className="deets">
          <p>put description here</p>
          <p> BoldPrice    Qty:1</p>
          <p> OldPrice</p>
        </div>
      </div>
    )
  }
}

export default Details2;
