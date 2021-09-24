import React, { useContext, useEffect, useRef, useState } from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import { ShipContext } from '../context/ShipContext';
import fixWorldWrap from '../utils/fixWorldWrapIssues';
import { Route } from '../types/shipContext';

const Map = () => {
    const { state } = useContext(ShipContext);

    const routes = useRef<Array<Route>>();
    const [_, toggle] = useState(false);

    useEffect(() => {
        routes.current = state.selectedRouteToUs ? fixWorldWrap([state.routeFromUs, state.selectedRouteToUs]) : [];
        toggle((curr) => !curr);
    }, [state]);

    return (
        <Box w="100%" color="white">
            <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {routes?.current?.map((route, i) => (
                    <Polyline positions={route.map((r) => r.coordinates)} color={i < 2 ? 'blue' : 'red'} />
                ))}
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
