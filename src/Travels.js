import React from "react";

import Travel from "./Travel";

const travels = [
  {
    destination:"Toulouse",
    country:"France",
    image:"https://www.edreams.com/blog/wp-content/uploads/sites/3/2018/02/Toulouse-Saint-Pierre-Bridge.jpg",
    distance:"883"    
  },
  {
    destination:"Moscou",
    country:"Russie",
    image:"https://static.service-voyages.com/photos/croisiere-russie/saint-petersbourg/moscou_278598_pgbighd.jpg",
    distance:"2 594"  
    },
  {
    destination:"Rome",
    country:"Italie",
    image:"https://back-visiteurope.orchestra-platform.com/admin/TS/fckUserFiles/Image/A-Refonte/Italie/ITA-AMAR-AMAC/PROGRAMME/italie-circuit-de-rome-a-la-cote-amalfitaine-rome-colisee-programme-jour-3.jpg",
    distance:"1 534 "  
    },
  {
    destination:"Sapporo",
    country:"Japon",
    image:"https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2016/07/31503219368_94bec793e9_k-770x513.jpg",
    distance:"Trop loin"  
    },
  {
    destination:"Stockholm",
    country:"Suède",
    image:"https://www.opodo.fr/blog/wp-content/uploads/sites/16/2016/09/shutterstock_163488893-min.jpg",
    distance:"1 573"  
    }
];

const Travels = () => (
  <div>
    {travels.map(travels => (
      <Travel destination={travels.destination} image={travels.image} country={travels.country} distance={travels.distance}/>
    ))}
  </div>
);

export default Travels;