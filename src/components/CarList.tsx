import React from "react";
import { cars } from "../data/cars";
import { CarCard } from "./CarCard";

// TODO: Type the props, fix the className and pass down props to the CarCard component

export const CarList = ({ searchTerm }) => {
  return (
    <section className=car-list>
      {cars
        .filter(
          car =>
            car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.model.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(car => (
          <CarCard key={car.id}/>
        ))}
    </section>
  );
};
