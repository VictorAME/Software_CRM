import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./modules/Home/Home";
import SignUp from "./modules/SignUp/SignUp";
import Authentication from "./modules/Auth/Authentication";
import Client from "./modules/UsersRule/Client/Client";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Authentication /> } />

          {/* Client: */}
          <Route path="/client" element={<Client />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
