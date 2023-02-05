import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";


const App = () => {
  return (
    <div className="container">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/cart" element = {<Cart/>}/>
            <Route path="/about" element = {<About/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;


