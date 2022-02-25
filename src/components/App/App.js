import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Header from "../Header/Header";
import {Provider} from "react-redux";
import {store} from "../../redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}></Route>
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
