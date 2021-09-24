import React, { useContext } from 'react';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { Box } from '@chakra-ui/react';
import { ShipContext } from '../context/ShipContext';
import fixWorldWrap from '../utils/fixWorldWrapIssues';

const Map = () => {
    const { state } = useContext(ShipContext);

    // const routes = state.allRoutesToUs ? fixWorldWrap(state.allRoutesToUs) : [];
    const routes = state.selectedRouteToUs ? fixWorldWrap([state.routeFromUs, state.selectedRouteToUs]) : [];
    console.log(routes.length);

    return (
        <Box w="100%" p={4} color="white">
            <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {routes.map((route, i) => (
                    <Polyline positions={route.map((r) => r.coordinates)} color={i < 2 ? 'blue' : 'red'} />
                ))}
                {/* //{state.selectedRouteToUs && ( */}
                {/* //    <> */}
                {/* //        <Polyline positions={state.selectedRouteToUs.map((loc) => loc.coordinates)} color="blue" /> */}
                {/* //        <Polyline positions={state.routeFromUs.map((loc) => loc.coordinates)} color="red" /> */}
                {/* //    </> */}
                {/* //)} */}
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
