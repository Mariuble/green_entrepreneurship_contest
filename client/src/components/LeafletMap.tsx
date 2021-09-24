import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import locationParser from '../parser/locationParser';
import shipParser from '../parser/shipParser';
import groupLocations from '../utils/groupLocations';
import closestPoint from '../utils/closestPoint';
import estimateCO2PerDistance from '../utils/estimateCO2PerDistance';

const Map = () => {
    //const locations = locationParser();
    //const mappedLocations = groupLocations(locations);
    const destination = 'CNTSN';
    const start = 'USMSY';
    //const filteredLocations = mappedLocations.filter((loc) => loc[0].to === destination);
    //const closestRoute = closestPoint(mappedLocations[7][0].coordinates, filteredLocations);

    const DAILY_RATE = 47273;

    const ships = shipParser();

    const distanceUsToChina = ships[9].totalDistance;
    const timeToChina = ships[9].hoursUnderway;

    const toUs = ships
        .filter((ship) => ship.to === start)
        .map((ship) => {
            return { name: ship.vesselName, co2: ship.totalCO2, time: ship.hoursUnderway };
        });
    const fromUs = ships
        .filter((ship) => ship.from === start)
        .map((ship) => {
            return { name: ship.vesselName, co2: estimateCO2PerDistance(ship) * distanceUsToChina, time: timeToChina };
        });

    const total = toUs.map((ship, i) => {
        return {
            ...ship,
            co2: ship.co2 + fromUs[i].co2,
            time: ship.time + fromUs[i].time,
            cost: DAILY_RATE * (ship.time + fromUs[i].time),
        };
    });

    console.log(total);

    return (
        <Box w="100%" p={4} color="white">
            <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* {mappedLocations.map((loc) => ( */}
                {/* <Polyline positions={loc.map((l) => l.coordinates)} color={'red'} /> */}
                {/* ))} */}
                {/* <Polyline positions={closestRoute.route.map((l) => l.coordinates)} color={'blue'} /> */}
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
