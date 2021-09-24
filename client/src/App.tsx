import { useReducer } from 'react';
import './App.css';
import Map from './components/LeafletMap';
import VesselContainer from './components/VesselContainer';
import { ChakraProvider } from '@chakra-ui/provider';
import { initialState, ShipContext, shipReducer } from './context/ShipContext';

function App() {
    const [state, dispatch] = useReducer(shipReducer, initialState);
    return (
        <div className="App">
            <ChakraProvider>
                <ShipContext.Provider value={{ state, dispatch }}>
                    {/* <Map /> */}
                    <VesselContainer />
                </ShipContext.Provider>
            </ChakraProvider>
        </div>
    );
}

export default App;
