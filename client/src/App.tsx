import { useReducer } from 'react';
import './App.css';
import Map from './components/LeafletMap';
import VesselContainer from './components/VesselContainer';
import Footer from './components/Footer';
import Landing from './components/Landing';
import { ChakraProvider } from '@chakra-ui/react';
import { initialState, ShipContext, shipReducer } from './context/ShipContext';

function App() {
    const [state, dispatch] = useReducer(shipReducer, initialState);
    return (
        <div className="App">
            <ChakraProvider>
                <ShipContext.Provider value={{ state, dispatch }}>
                    <Landing />
                    {/* <Map /> */}
                    <VesselContainer />
                </ShipContext.Provider>
                <Footer />
            </ChakraProvider>
        </div>
    );
}

export default App;
