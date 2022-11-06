import './App.css';
import Header from "./Header";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/checkout" element={<CheckoutPage/>}/>
                </Route>
            </Routes>
        </div>
      </Router>
  );
}

export default App;
