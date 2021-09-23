import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer, Polyline } from 'react-leaflet';
import locations from '../data/locations.json';
import { Box } from '@chakra-ui/react';
import { LatLngExpression } from 'leaflet';

const fs = require('fs');

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
    const foo = locations
        //.filter((loc, i) => i < 1000)
        .map((loc) => [parseFloat(loc.latitude), parseFloat(loc.longitude)] as LatLngExpression);
    console.log(foo);

    return (
        <Box bg="tomato" w="100%" p={4} color="white">
            <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={foo} color={'red'} />
            </MapContainer>
        </Box>
    );
};

export default Map;
/*
{foo.map((loc, i) => (
  <Marker
      key={`${loc.latitude}${loc.longitude}`}
      position={[parseFloat(loc.latitude), parseFloat(loc.longitude)]}
  ></Marker>
))}
*/
