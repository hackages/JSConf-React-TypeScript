import React, { Component } from "react";
import { convertToMetric, convertToEuro } from "../utils";

export class CarInfoPanel extends Component {
  state = { imperial: true };

  toggleSystem = () => {};
  render() {
    const {
      topSpeed,
      hp,
      engine,
      curbWeight,
      country,
      year,
      price,
      model,
      brand
    } = this.props.car;
    const { imperial } = this.state;
    return (
      <section className="car-details-info-panel">
        <div className="info-row">
          <p className="label">Top Speed</p>
          <p>
            {imperial ? topSpeed : convertToMetric(topSpeed, "speed")}
            {imperial ? <span> MPH</span> : <span> KM/H</span>}
          </p>
        </div>
        <div className="info-row">
          <p>HP</p>
          <p>{hp || "N/A"}</p>
        </div>
        <div className="info-row">
          <p>Engine</p>
          <p>{engine}</p>
        </div>
        <div className="info-row">
          <p>Weight</p>
          <p>
            {imperial ? curbWeight : convertToMetric(curbWeight, "weight")}
            {imperial ? <span> LB</span> : <span> KG</span>}
          </p>
        </div>
        <div className="info-row">
          <p>Country</p>
          <p>{country}</p>
        </div>
        <div className="info-row">
          <p>Year</p>
          <p>{year}</p>
        </div>
        <div className="info-row">
          <p>Price</p>
          <p>
            {imperial ? price : convertToEuro(price)}
            {imperial ? <span> $</span> : <span> €</span>}
          </p>
        </div>

        {/* Here is the best place to put your button */}

        <div className="info-title">
          <h3>{model}</h3>
          <h2>{brand}</h2>
        </div>
      </section>
    );
  }
}
