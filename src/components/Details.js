import React from 'react';
import Details2 from './Details2';
class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{(!this.props.detailSign)?"See":"Hide"} Item Details <button onClick={this.props.showDetails}>{(!this.props.detailSign)? "+":"-"}</button></h3>
        {(this.props.detailSign)? <Details2 url={this.props.url}
                                            price={this.props.price}
                                            oldPrice={this.props.oldPrice}
                                            description={this.props.description}/>: null}

      </div>
    )
  }
}

export default Details;
