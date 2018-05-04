import React from 'react';

class Promo extends React.Component {

  render() {
    return (
      <div>
<h3>Promo <button onClick={this.props.showPromo}>{(!this.props.promoSign)? "+":"-"}</button></h3>
  {(this.props.promoSign)? <button>Apply</button>: null}
      </div>
    )
  }
}

export default Promo;
