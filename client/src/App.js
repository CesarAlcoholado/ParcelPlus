import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="Home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
