import React, { useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import locations from "../data/locations.json";

const fs = require("fs");

export type VoyageLegs = {
  VesselName: String;
  PORT_UN_FROM: String;
  PORT_UN_TO: String;
  HOURS_UNDERWAY: number;
  total_distance: number;
  CARGO_to_DWT_pct: number;
  Total_CO2: number;
  StandardShipDesign: String;
  VesselTypeGroup: String;
};

export type AISPOSITION = {
  VesselName: String;
  From: String;
  To: String;
  LoadingCondition: String;
  hoursSinceLastPosition: number;
  longitude: number;
  latitude: number;
};

const Map = () => {
  /*
  fs.readFile(
    "../../data/locations.json",
    "utf8",
    (err: any, jsonString: any) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
      console.log("File data:", jsonString);
      setLocation(JSON.parse(jsonString));
    }
  );
*/

  console.log(locations);
  return (
    <MapContainer
      center={[59.90688962048543, 10.76030652299994]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map(({ latitude, longitude }) => (
        <Marker
          key={`${latitude}${longitude}`}
          position={[parseFloat(latitude), parseFloat(longitude)]}
        ></Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
