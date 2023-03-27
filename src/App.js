import Data from './api/Data';
import './App.css';
import Game from './components/Game/Game';
import GameRoute from './components/GameRoute/GameRoute';
import { Routes,Route } from 'react-router-dom';

function App() {
  console.log(Data.robotAccessKey());
  return (
    <div className="App">
      {/* <Route path="/" element={<App />}> */}
      {/* <Route> */}
      <Routes>

        <Route path="/game/:id" element={<Game />} />
        <Route path="/" element={<GameRoute />} />
      </Routes>

    </div>
  );
}

export default App;
