import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
<Router>
  <Header/>
  <Routes>
    <Route exact path="/" element={<Home/>}></Route>
  </Routes>
</Router>
    </div>
  );
}

export default App;
