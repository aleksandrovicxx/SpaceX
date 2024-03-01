import './App.css';
import { Navbar } from './components/navbar';
import HomeView from './components/views/HomeView';
import LaunchesView from './components/views/LaunchesView';
import RocketsView from './components/views/RocketsView';
import ShipsView from './components/views/ShipsView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LaunchesContextProvider from './context/launchesContext';

function App() {
  return (
    <div className="App">
      <Router>
        <LaunchesContextProvider>
          <Navbar/>
            <Routes>
              <Route path="/launches" element={<LaunchesView/>}/>
              <Route path="/rockets" element={<RocketsView/>}/>
              <Route path="/ships" element={<ShipsView/>}/>
              <Route path="/" element={<HomeView/>}/>
            </Routes>
          </LaunchesContextProvider>
      </Router>
    </div>
  );
}

export default App;
