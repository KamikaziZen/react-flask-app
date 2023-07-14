import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import ShowCase from '../ShowCase';

function Home() {
	return (
		<>
			<HeroSection />
			<ShowCase />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
