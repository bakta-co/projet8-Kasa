import React, { useState } from 'react';
import data from '../about.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';


function Collapse() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className='wrapper'>
            <div className='collapse'>
                {data.map((item, i)=> (
                    <div className='item' key={i}>
                        <div className='title' onClick={()=> toggle(i)}>
                            <h2>{item.title}</h2>
                            <span className='arrow'>
                                {selected === i ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} /> } </span>
                            
                        </div>
                        <div className = {
                            selected === i ? 'descriptionshow' : 'description'} >
                                 {item.description}
                                 </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Collapse;