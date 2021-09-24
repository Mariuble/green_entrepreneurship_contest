import './App.css';
import Map from './components/LeafletMap';
import { getDistanceFromLatLonInKm } from './components/Calulations';

function App() {
    return (
        <div className="App">
            <Map />
        </div>
    );
}

export default App;
