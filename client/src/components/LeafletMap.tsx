import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import locationParser from '../parser/locationParser';
// import shipParser from '../parser/shipParser';
import groupLocations from '../utils/groupLocations';
import closestPoint from '../utils/closestPoint';

const Map = () => {
    const locations = locationParser();
    const mappedLocations = groupLocations(locations);
    const destination = 'CNTSN';
    const start = 'USMSY';
    const filteredLocations = mappedLocations.filter((loc) => loc[0].to === destination);
    const closestRoute = closestPoint(mappedLocations[7][0].coordinates, filteredLocations);

    // const ships = shipParser();

    // const foo = locations
    // .filter((loc, i) => i < 1000)
    // .map((loc) => [parseFloat(loc.latitude), parseFloat(loc.longitude)] as LatLngExpression);

    return (
        <Box bg="tomato" w="100%" p={4} color="white">
            <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mappedLocations.map((loc) => (
                    <Polyline positions={loc.map((l) => l.coordinates)} color={'red'} />
                ))}
                <Polyline positions={closestRoute.route.map((l) => l.coordinates)} color={'blue'} />
                {/* <Polyline positions={coordinates} color={'red'} /> */}
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
