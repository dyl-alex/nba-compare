import './Style/App.css';
import { Landing } from './Components/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard';
import ComparePage from './Components/ComparePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/compare" element={<ComparePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
