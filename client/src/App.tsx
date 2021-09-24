import { useReducer } from 'react';
import './App.css';
import Map from './components/LeafletMap';
import VesselContainer from './components/VesselContainer';
import { initialState, ShipContext, shipReducer } from './context/ShipContext';

function App() {
    const [state, dispatch] = useReducer(shipReducer, initialState);
    return (
        <div className="App">
            <ShipContext.Provider value={{ state, dispatch }}>
                {/* <Map /> */}
                <VesselContainer />
            </ShipContext.Provider>
        </div>
    );
}

export default App;
