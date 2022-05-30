import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar/Nav';
import Built from './Component/Built/built';
import Start from './Component/Start/Start.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Services from './Component/Services/Services';
import Portfolio from './Component/Portfolio/Portfolio';
import Team from './Component/Team/Team';
import Quote from './Component/Quote/Quote';

import {BrowserRouter as   Router, Route , Routes} from 'react-router-dom'

function App() {
  return (
   <>
   <Router>
   <Nav/>
   <Routes>
   <Route path='/' element={<Built/>} />
   <Route path='/service' element={<Services/>} />
   <Route path='/portfolio' element={<Portfolio/>} />
   <Route path='/team' element={<Team/>}  />
   </Routes>
   <Quote/>
   <Footer/>
   </Router>
   </>
  );
}

export default App;
