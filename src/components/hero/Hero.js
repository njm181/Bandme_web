import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, MainHeading} from '../../globalStyles';
import {HeroSection, HeroText, ButtonWrapper, HeroText2, HeroText3, HeroAppsIcon} from './HeroStyle';
import {FaAppStoreIos,FaGooglePlay} from 'react-icons/fa'



const Hero = () => {
	
	return (
		<HeroSection>
			<Container>
				<MainHeading>Bandme</MainHeading>
				<HeroText>
					Connect with people, Share your music, Discover other artists
				</HeroText>
				<HeroText2>
				An application to connect with people and places, so that your musical career takes off.
				Share what you know how to do, find the right people, and amazes people in the best places available.
				</HeroText2>
				<HeroText3>
					Avaible download on Google Play Store <HeroAppsIcon><icon><FaGooglePlay/></icon></HeroAppsIcon>	
					   & iOS AppStore	<HeroAppsIcon><icon><FaAppStoreIos/></icon></HeroAppsIcon>					
				</HeroText3>
				
				<ButtonWrapper>
					<Link to="/download">
						<Button>Download</Button>
					</Link>
					
				</ButtonWrapper>
			
			</Container>
			
		</HeroSection>
	);
};

export default Hero