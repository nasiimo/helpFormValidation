import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import CharacterDetail from "../characters/CharacterDetail";
import Login from "../login/Login";
import Admin from "../admin/Admin";
import Menu from "./Menu";
import { AuthProvider } from "../../context/AuthContext";

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Menu />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route path="/detail/:id" component={CharacterDetail} />
          </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default Layout;
