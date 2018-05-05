import React, { Component } from 'react';
import Info from './components/Info.js';
import Details from './components/Details.js';
import Promo from './components/Promo.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.showDetails = this.showDetails.bind(this);
    this.showPromo = this.showPromo.bind(this);
    this.state = {
      detailsToggle: false,
      promoToggle: false,
      item: {
        description: "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red",
        newPrice: "$205.20",
        oldPrice: "$250.00",
        qty: 1,
        url: "https://orig00.deviantart.net/42fa/f/2017/241/6/1/vehicleenvmap256_by_slycoopergta-dblpxm5.png",
        subtotal: "$102.96",
        savings: "$3.85",
        taxes: "$8.92",
        total: "42.00"
      },
    }
  }

  showDetails() {
    this.setState(prev => ({
      detailsToggle: !prev.detailsToggle
    }))
  }
  showPromo() {
    this.setState(prev => ({
      promoToggle: !prev.promoToggle
    }))
  }


  render() {
    return (
      <div className="App">
        <Info subtotal={this.state.item.subtotal}
              url={this.state.item.url}
              savings={this.state.item.savings}
              taxes={this.state.item.taxes}
              total={this.state.item.total}/>
        <Details showDetails={this.showDetails}
                 detailSign={this.state.detailsToggle}
                 url={this.state.item.url}
                 description={this.state.item.description}
                 price={this.state.item.newPrice}
                 oldPrice={this.state.item.oldPrice}
                  />
        <Promo showPromo={this.showPromo}
               promoSign={this.state.promoToggle}/>
      </div>
    );
  }
}

export default App;
