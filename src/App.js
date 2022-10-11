import logo from './logo.svg';
import './App.css';
import AddDetails from './components/addDetails';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    // <Router>
      <div>
        {/* <Route path="/add" component={AddDetails}exact/> */}
        <AddDetails/>
      </div>
    // </Router>
  );
}

export default App;
