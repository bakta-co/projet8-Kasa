import React from 'react';
import Banner from '../banner';
import ImageAbout from '../../IMG-about.png';
import Data from '../../about.json';
import Collapse from '../collapse.jsx';


export default function About() {
  return (
    <div className='about'>
      <Banner imageUrl={ImageAbout} />
      <div className='collapse-section'>
        <Collapse data={Data} />
      </div>
    </div>
  );
}