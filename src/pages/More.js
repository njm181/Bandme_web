import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading} from '../globalStyles';
import {HeroSection, HeroText, HeroText3} from '../components/hero/HeroStyle';


const More = () => {
  return (
    <HeroSection id="more">
			<Container>
				<MainHeading>What is Bandme?</MainHeading>
				<HeroText>
				Currently, there is no centralized medium that manages to unite artists and bands, together with rehearsal rooms and bar owners, since the main mediums are social media groups, or classified ads pages 
      		
				</HeroText>
				
				<HeroText3>
				Bandme is an application that centralizes all your activity related to music, 
				so you can have easy access and effective communication with other artists and establishments, 
				to form bands, events, colleagues and friends. 
				</HeroText3>
				
				<HeroText3>Our goal is to connect as many musicians and establishments focused on music, among themselves and with the public, so that they only need to focus on what they are passionate about, making music.</HeroText3>
				
				<Link to="/">
						<Button>Go Back</Button>
					</Link>
			</Container>
			
		</HeroSection>
  )
}

export default More