import React from "react";



const Travel = ({ destination, country, image, distance }) => (
    <figure>
      <img src={image} alt={country} />
      <figcaption>
        <h1>{destination}</h1>
        <h2>{country}</h2>
        <p>{distance} km te sépare de cette destination si tu es de Lille</p>
      </figcaption>
    </figure>
  );

export default Travel;