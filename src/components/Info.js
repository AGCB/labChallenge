import React from 'react';


class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}
  }

  render() {
    return (
      <div>
        <p>Subtotal     {this.props.subtotal}</p>    
        <p><a href={this.props.url}>Pickup Savings Link</a>    {this.props.savings}</p>
        <p>Estimated taxes and fees   {this.props.taxes}</p>
        <p>---------------------</p>
        <p>Est. Total    {this.props.total}</p>
      </div>
    )
  }
}

export default Info;
