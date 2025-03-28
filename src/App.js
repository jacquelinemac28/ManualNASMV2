import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Introductioon from './Pages/Introductioon';
import Fundaments from './Pages/Fundaments';
import PracticalExamples from './Pages/PracticalExamples';
import Resourser from './Pages/Resourser';
import Manual from './Pages/Manual';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Manual/>}/>
          <Route path="/introduccion" element={<Introductioon/>}/>
          <Route path="/fundamentos" element={<Fundaments/>}/>
          <Route path="/ejemplos-practicos" element={<PracticalExamples/>}/>
          <Route path="/recursos" element={<Resourser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

