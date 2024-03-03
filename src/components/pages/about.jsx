import React from 'react';
import Banner from '../banner';
import ImageAbout from '../../assets/images/IMG-about.png';
import Data from '../../data/about.json';
import Collapse from '../collapse';


export default function About() {
  return (
    
    <div className='about'>
      <Banner imageUrl={ImageAbout} />
      <div className='collapse-section'>
        {Data.map((item, index) => (
          <Collapse
            key={index}
            title={item.title}
            description={item.description}
          />
          
        ))}
      </div>
    </div>
    
  )
}