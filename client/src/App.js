import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import './App.css';

if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
