import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
	    showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<div>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						CrowdScience
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='/' className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
                                                        <HashLink to='/#services' smooth className='nav-links' onClick={closeMobileMenu}>
                                                                Services
                                                        </HashLink>
                                                </li>
						<li className='nav-item'>
                                                        <HashLink to='/#partners' smooth className='nav-links' onClick={closeMobileMenu}>
                                                               Partners 
                                                        </HashLink>
                                                </li>
						<li className='nav-item'>
                                                        <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
                                                               Customer Reviews
                                                        </Link>
                                                </li>
					</ul>
					{button && <Button buttonStyle='btn--outline'>Order</Button>} 
				</div>
			</nav>

		</div>
	)
}

export default Navbar;
