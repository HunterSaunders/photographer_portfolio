import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavMenu from './component/NavMenu/NavMenu';
import NavMenuMobile from './component/NavMenuMobile/NavMenuMobile'
import Home from './views/Home/Home';
import About from './views/About/About';
import Gallery from './views/Gallery/Gallery';
import Pricing from './views/Pricing/Pricing';
import Contact from './views/Contact/Contact';

function App() {
  return (


    <Router>
      <div className="App">
        <NavMenu/>
        <NavMenuMobile/>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/gallery' component = {Gallery} />
        <Route exact path = '/pricing' component = {Pricing} />
        <Route exact path = '/contact' component = {Contact} />

        
      </div>
    </Router>
    
  );
}

export default App;
