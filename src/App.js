import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import New from "./pages/New";
import Transaction from "./pages/Transaction";
import EditTransaction from "./pages/EditTransaction";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Transaction />} />
          <Route
            path="/transactions/:index/edit"
            element={<EditTransaction />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
