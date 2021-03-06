import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import NotFound from './NotFound/NotFound';
import OurServices from './components/OurServices/OurServices';
import Login from './components/Login/Login/Login';
import Authprovider from './context/Authprovider';


function App() {
  return (
    <Authprovider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/ourservices/:serviceId">
            <OurServices></OurServices>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Authprovider>
  );
}

export default App;
