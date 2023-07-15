import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ReviewsPage from './components/pages/ReviewsPage';
import Pdf from "./instruction.pdf";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div>
	<Router>
		<Navbar />
	  	<Switch>
	  		<Route path='/' exact component={Home} />
			<Route path='/services' exact component={Services} />
			<Route path='/products' exact component={Products} />
			<Route path='/sign-up' exact component={SignUp} />
			<Route path='/reviews' exact component={ReviewsPage} />
			<Route path='/instructions' exact component={Pdf} />
	  	</Switch>
	</Router>
    </div>
  );
}

export default App;
