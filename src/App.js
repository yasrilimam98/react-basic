import "./App.css";
import Home from "./pages/Home";
import Kontak from "./pages/Kontak";
import Nav from "./pages/Nav";
import Sejarah from "./pages/Sejarah";
import Tentang from "./pages/Tentang";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Siswa from "./pages/Siswa";
import Menu from "./pages/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/kontak" component={Kontak} />
          <Route path="/sejarah" component={Sejarah} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/siswa" component={Siswa} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
