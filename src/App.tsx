import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';
import Characters from './pages/Characters';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Characters />}/>
      <Route path="/character/:id" element={<CharacterDetail />}/>
    </Routes>
  );
}

export default App;