import 'bootstrap/dist/css/bootstrap.min.css';
import Back from './Back/Back';
import Front from './Front/Front';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Front} exact />
        <Route path="/admin" component={Back} />
      </Router>
    </div>
  );
}

export default App;
