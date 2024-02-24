
import { BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./Components/Login";

import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={ <Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
