import React from 'react';
import Carrousel from '../slider';
import logementsData from "../../logements.json";
import { useParams, Navigate } from 'react-router-dom';
import Collapse from '../collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Logement = ({ match }) => {
  const { id }= useParams();
  const logement = logementsData.find(item => item.id === id);
  const stars = 5;
  const option =  <ul className='Options'>
  {logement.equipments.map((item, index) => (
      <li key={index}>{item}</li>
  ))}
</ul>;

  if (!logement) {
    return <Navigate to="*"/>;
  }

  return (
    <div className='Logement'>
      <Carrousel images={logement.pictures} title={logement.title} />

      <div className='Section-presentation'>
        <div className='Section-title'><div className='Logement-title'>{logement.title}</div>
      <div className='Logement-location'>{logement.location}</div>
      <div className='Logement-tag'>
        <div className='Logement-tags'>
      {logement.tags.map((tag, index) => (
        <div key={index} className='tag-item'>
          {tag}
        </div>))}
        </div>
      </div> 
      </div>
      <div className='infos'>
        
      <div className='Logement-rating'>
      {[...Array(stars)].map((_, index) => (
    <FontAwesomeIcon
      key={`star-${logement.id}-${index}`}
      icon={faStar}
      className={`star ${index < logement.rating ? 'filled-star' : 'grey-star'}`}
    />
        ))}
      </div>
        <div className='Section-host'><span className='host-name'>{logement.host.name}</span> <img className='host-img' src={logement.host.picture} alt='{logement.host.name}'/></div>
      </div>
      

      </div>
      <div className='Section-collapse'>
        <Collapse title= 'Description' description= {logement.description}/>
        <Collapse title= "Équipements" description= {option} />
      </div>
    </div>
  );

};

export default Logement;