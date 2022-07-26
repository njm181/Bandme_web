import React from 'react';

import { Container, MainHeading} from '../globalStyles';
import {HeroSection, HeroText, HeroText3} from '../components/hero/HeroStyle';


const More = () => {
  return (
    <HeroSection id="more">
			<Container>
				<MainHeading>Info</MainHeading>
				<HeroText>
					
      Bandme is an application that centralizes all your activity related to music, so you can have easy access and effective communication with other artists and establishments, to form bands, events, colleagues and friends. 
				</HeroText>
				
				<HeroText3>
					Avaible download on Google Play Store & iOS AppStore	
				</HeroText3>
				
			
			</Container>
			
		</HeroSection>
  )
}

export default More