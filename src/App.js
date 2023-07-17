import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Order from './components/pages/Order';
import ReviewsPage from './components/pages/ReviewsPage';
import ContentsPage from './components/pages/ContentsPage';
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
			<Route path='/products' exact component={Products} />
			<Route path='/order' exact component={Order} />
			<Route path='/reviews' exact component={ReviewsPage} />
			<Route path='/instructions' render={() => (window.open(Pdf))} />
	  		<Route path='/contents' exact component={ContentsPage} />
	  	</Switch>
	</Router>
    </div>
  );
}

export default App;
