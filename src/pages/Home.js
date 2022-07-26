import React from 'react'

//components: Hero, Features, content
import Hero from '../components/hero/Hero'
import Features from '../components/features/Features'
import { Content } from '../components/content/Content'
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

const Home = () => {
  return (
    <div>

        <Hero/>
        <Features/>
        <Content {...heroOne} />
			  <Content {...heroTwo} />
			  <Content {...heroThree} />
    </div>
    
  )
}

export default Home