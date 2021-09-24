import './App.css';
import Map from './components/LeafletMap';
import VesselContainer from './components/VesselContainer';

function App() {
    return (
        <div className="App">
            <div>
                {/* <Map /> */}
                <VesselContainer />
            </div>
        </div>
    );
}

export default App;
