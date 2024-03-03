import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Collapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const { title, description } = props;

    return (
        <div className='wrapper'>
            <div className='collapse'>
                <div className='item'>
                    <div className='title' onClick={toggle}>
                        <h2>{title}</h2>
                        <span className={`arrow ${isOpen ? 'open' : ''}`}>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                    <div className={`description ${isOpen ? 'descriptionshow' : ''}`}>
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collapse;