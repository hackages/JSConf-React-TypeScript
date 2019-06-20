import React, { Component } from "react";
import { cars } from "../data/cars";
import { CityBg, Road, Throttle } from "../style/theme";
import { CarInfoPanel } from "./CarInfoPanel";

export class CarDetails extends Component {
  state = {
    isDriving: false
  };
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const selectedCar = cars.find(car => car.id == id);
    this.setState({ selectedCar });
  }

  accelerate = () => {};
  decelerate = () => {};

  render() {
    const { selectedCar, isDriving } = this.state;
    return (
      <section className="car-details">
        <div className="background">
          <CityBg animate={isDriving} />
          <Road animate={isDriving} />
          {selectedCar && <img src={{selectedCar.image}} alt="" />}
        </div>
        <div className="container">
          {selectedCar && <CarInfoPanel car={selectedCar} />}

          {/* Upgrade the Throttle component below to give the car a little spin ! */}
          <Throttle animate={isDriving} />
        </div>
      </section>
    );
  }
}
