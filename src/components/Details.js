import React from 'react';
import Details2 from './Details2';
class Details extends React.Component {


  render() {
    return (
      <div>
        <h3>Details <button onClick={this.props.showDetails}>{(!this.props.detailSign)? "+":"-"}</button></h3>
        {(this.props.detailSign)? <Details2 url={this.props.url}/>: null}
      </div>
    )
  }
}

export default Details;
