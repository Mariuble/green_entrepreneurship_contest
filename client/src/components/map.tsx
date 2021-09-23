import React from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import locationParser from '../parser/locationParser';
import shipParser from '../parser/shipParser';

const Map = () => {
    const locations = locationParser().map((loc) => loc.coordinates);
    const ships = shipParser();

    // const foo = locations
    // .filter((loc, i) => i < 1000)
    // .map((loc) => [parseFloat(loc.latitude), parseFloat(loc.longitude)] as LatLngExpression);

    return (
        <Box bg="tomato" w="100%" p={4} color="white">
            <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline positions={locations} color={'red'} />
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
