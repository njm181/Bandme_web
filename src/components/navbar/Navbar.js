import React,  { useState } from 'react'
import {FaTimes} from 'react-icons/fa';
import {CgMenuRight} from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavLinks, 
    NavItem} from './NavbarStyle';
import { useLocation, useNavigate  } from 'react-router-dom';
import {data} from '../../data/NavbarData'
import { Link } from 'react-router-dom';
import {Button} from '../../globalStyles';

const Navbar = () => {
    const [show, setShow] = useState(false);

	let history = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
			setShow(false);
		}

		history.push(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="./assets/music.png" alt="" />
						Bandme
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						<Link to="/more">
						<Button>Info</Button>
					</Link>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar