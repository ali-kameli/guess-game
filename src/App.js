import './App.css';
import Game from './components/Game/Game';
import GameRoute from './components/GameRoute/GameRoute';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/game/:id" element={<Game />} />
        <Route path="/" element={<GameRoute />} />
      </Routes>
    </div>
  );
}

export default App;
