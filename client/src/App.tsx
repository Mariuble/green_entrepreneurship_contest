import './App.css';
import Map from './components/LeafletMap';
import Vessel from './components/Vessel';
import shipParser from './parser/shipParser';
import estimateCO2PerDistance from './utils/estimateCO2PerDistance';

function App() {
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
    return (
        <div className="App">
            <div>
                {/* <Map /> */}
                {total.map((tot) => (
                    <Vessel vesselName={tot.name} co2={tot.co2} time={tot.time} cost={tot.cost} />
                ))}
            </div>
        </div>
    );
}

export default App;
